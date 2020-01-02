import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import {
  UPDATE_VISITED_CITY_REVIEWS,
  UPDATE_VISITING_CITY_REVIEWS,
  UPDATE_LIVING_CITY_REVIEWS
} from "../../../../GraphQL";

import CityReviewCard from "./CityReviewCard";
import Loader from '../../../../components/common/Loader/Loader';

export default function CityReviewsContainer({
  page,
  reviews,
  updateLocalReviews,
  city,
  refetch,
  urlUsername
}) {
  const [loaded, handleLoaded] = useState(false);
  const [edit, handleEdit] = useState(false);
  const [localCityReviews, handleLocalCityReviews] = useState();
  useEffect(() => {
    for (let i in reviews) {
      delete reviews[i].__typename;
    }
    handleLocalCityReviews(reviews);
    handleLoaded(true);
  }, [reviews]);
  function handleAddButtonClick() {
    handleLoaded(false);
    let cityReviews = localCityReviews;
    let newCityReview = {};
    city.timing === "past"
      ? (newCityReview.PlaceVisitedId = city.id)
      : city.timing === "future"
      ? (newCityReview.PlaceVisitingId = city.id)
      : (newCityReview.PlaceLivingId = city.id);
    newCityReview.attraction_name = "";
    newCityReview.attraction_type =
      page === "places"
        ? "monument"
        : page === "activities"
        ? "tour"
        : "breakfast";
    newCityReview.comment = "";
    newCityReview.cost = null;
    newCityReview.id = 0;
    newCityReview.key = cityReviews.length;
    newCityReview.rating = 1;
    newCityReview.currency = "USD";
    cityReviews.push(newCityReview);
    handleLocalCityReviews(cityReviews);
    updateLocalReviews(newCityReview);
    handleLoaded(true);
  }

  function handleType(id, key, type) {
    let reviewToUpdate = localCityReviews.findIndex(review => review.id === id && review.key === key);
    localCityReviews[reviewToUpdate].attraction_type = type;
    handleLocalCityReviews(localCityReviews);
    
  }
  function handleInputChange(id, key, input) {
    let reviewToUpdate = localCityReviews.findIndex(review => review.id === id && review.key === key);
    localCityReviews[reviewToUpdate].attraction_name = input;
    handleLocalCityReviews(localCityReviews);
  }
  function handleRatingChange(id, key, rating) {
    let reviewToUpdate = localCityReviews.findIndex(review => review.id === id && review.key === key);
    localCityReviews[reviewToUpdate].rating = rating;
    handleLocalCityReviews(localCityReviews);
  }
  function handleCostChange(id, key, cost) {
    let reviewToUpdate = localCityReviews.findIndex(review => review.id === id && review.key === key);
    if (cost === null || cost === "") {
      localCityReviews[reviewToUpdate].cost = null;
    } else {
      localCityReviews[reviewToUpdate].cost = Number(cost);
    }
    handleLocalCityReviews(localCityReviews);
  }
  function handleCurrencyChange(id, key, currency) {
    let reviewToUpdate = localCityReviews.findIndex(review => review.id === id && review.key === key);
    localCityReviews[reviewToUpdate].currency = currency;
    handleLocalCityReviews(localCityReviews);
  }
  function handleCommentChange(id, key, comment) {
    let reviewToUpdate = localCityReviews.findIndex(review => review.id === id && review.key === key);
    localCityReviews[reviewToUpdate].comment = comment;
    handleLocalCityReviews(localCityReviews);
  }

  function mutationPrep(mutation) {
    for (let i in localCityReviews) {
      delete localCityReviews[i].key;
    }
    mutation();
  }
  if (!loaded) return <Loader />;
  return (
    <>
      {localCityReviews.length < 1 ? (
        <span className="no-review-text">
          {urlUsername !== undefined
            ? "No reviews entered"
            : "Enter your first review!"}
        </span>
      ) : (
        localCityReviews.map((review) => (
          <CityReviewCard
            key={review.attraction_type + review.id + review.key}
            index={review.key}
            review={review}
            edit={edit}
            page={page}
            handleType={handleType}
            handleInputChange={handleInputChange}
            handleRatingChange={handleRatingChange}
            handleCostChange={handleCostChange}
            handleCurrencyChange={handleCurrencyChange}
            handleCommentChange={handleCommentChange}
            urlUsername={true}
            refetch={refetch}
          />
        ))
      )}
      {edit ? (
        <div className="add-button-container">
          <span
            className="button"
            id="add-review"
            onClick={handleAddButtonClick}
          >
            add review
          </span>
        </div>
      ) : null}
      {urlUsername !== undefined ? null : (
        <div className="review-edit-button-container">
          <Mutation
            mutation={
              city.timing === "past"
                ? UPDATE_VISITED_CITY_REVIEWS
                : city.timing === "future"
                ? UPDATE_VISITING_CITY_REVIEWS
                : UPDATE_LIVING_CITY_REVIEWS
            }
            variables={{ localCityReviews }}
            onCompleted={() => refetch()}
          >
            {mutation =>
              edit ? (
                <span className="large confirm button" onClick={() => mutationPrep(mutation)}>
                  Update
                </span>
              ) : (
                <span className="large button" onClick={() => handleEdit(true)}>
                  Edit
                </span>
              )
            }
          </Mutation>
        </div>
      )}
    </>
  );
}

CityReviewsContainer.propTypes = {
  page: PropTypes.string,
  reviews: PropTypes.array,
  updateLocalReviews: PropTypes.func,
  city: PropTypes.object,
  refetch: PropTypes.func,
  urlUsername: PropTypes.string
};
