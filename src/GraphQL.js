import gql from "graphql-tag";

//QUERIES

export const GET_ALL_USER_COUNTRIES = gql`
  query {
    users {
      id
      username
      full_name
      email
      phone_number
      gender
      birthday
      avatarIndex
      color
      UserInterests {
        id
        name
      }
      UserSocials {
        id
        link
        name
      }
      Places_visited {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceVisitedId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
      Place_living {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceLivingId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
      Places_visiting {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceVisitingId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
    }
  }
`;

export const GET_ALL_USER_INFO = gql`
  query {
    users {
      id
      username
      full_name
      Places_visited {
        id
        country
        countryId
        countryISO
        city
        cityId
      }
      Places_visiting {
        id
        country
        countryId
        countryISO
        city
        cityId
      }
      Place_living {
        id
        country
        countryId
        countryISO
        city
        cityId
      }
    }
  }
`;

export const GET_ALL_FRIEND_REQUESTS = gql`
  query {
    friend_requests {
      receiverId
      senderId
      status
      # senderUsername
      # requestSentAt
      User {
        username
      }
    }
  }
`;

export const SEND_FRIEND_REQUEST = gql`
  mutation sendFriendRequest($username: String!) {
    sendFriendRequest(username: $username) {
      id
      senderId
      receiverId
      status
      UserId
    }
  }
`;

export const GET_ALL_CITY_DETAILS = gql`
  query user($username: String!){
    user(username: $username) {
      id
      username
      full_name
      Places_visited {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceVisitedId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
      Place_living {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceLivingId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
      Places_visiting {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceVisitingId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
    }
  }
`;

export const GET_LOGGEDIN_USER_COUNTRIES = gql`
  query {
    user {
      id
      username
      full_name
      email
      phone_number
      gender
      birthday
      avatarIndex
      color
      UserInterests {
        id
        name
      }
      UserSocials {
        id
        link
        name
      }
      Places_visited {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceVisitedId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
      Place_living {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceLivingId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
      Places_visiting {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
        year
        days
        best_comment
        hardest_comment
        trip_purpose
        trip_company
        CityReviews {
          id
          PlaceVisitingId
          attraction_type
          attraction_name
          comment
          rating
          cost
          currency
        }
      }
    }
  }
`;

export const GET_LOGGEDIN_USER = gql`
  query {
    user {
      id
      username
      full_name
      email
      UserInterests {
        id
        name
      }
    }
  }
`;

export const GET_USER_COUNTRIES = gql`
  query user($username: String) {
    user(username: $username) {
      id
      username
      full_name
      email
      phone_number
      gender
      birthday
      avatarIndex
      color
      UserInterests {
        id
        name
      }
      UserSocials {
        id
        link
        name
      }
      Places_visited {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
      }
      Places_visiting {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
      }
      Place_living {
        id
        country
        countryId
        countryISO
        city
        cityId
        city_latitude
        city_longitude
      }
    }
  }
`;

export const GET_PROFILE_BASICS = gql`
  query user($username: String!) {
    user(username: $username) {
      id
      username
      full_name
      email
      UserInterests {
        id
        name
      }
    }
  }
`;

//MUTATIONS
export const ADD_PLACE_VISITED = gql`
  mutation addPlaceVisited($country: Country!, $cities: [City!]) {
    addPlaceVisited(country: $country, cities: $cities) {
      id
      country
      city
      cityId
      city_latitude
      city_longitude
    }
  }
`;

export const ADD_PLACE_VISITING = gql`
  mutation addPlaceVisiting($country: Country!, $cities: [City!]) {
    addPlaceVisiting(country: $country, cities: $cities) {
      id
      country
      city
      cityId
      city_latitude
      city_longitude
    }
  }
`;

export const REMOVE_PLACE_VISITING = gql`
  mutation removePlaceVisiting($placeVisitingId: Int!) {
    removePlaceVisiting(placeVisitingId: $placeVisitingId) {
      city
    }
  }
`;

export const REMOVE_PLACES_IN_COUNTRY = gql`
  mutation removePlacesInCountry($countryISO: String!) {
    removePlacesInCountry(countryISO: $countryISO) {
      id
      city
    }
  }
`;

export const ADD_PLACE_LIVING = gql`
  mutation addPlaceLiving($country: Country!, $cities: City) {
    addPlaceLiving(country: $country, cities: $cities) {
      id
      country
      city
      cityId
      city_latitude
      city_longitude
    }
  }
`;

// This will depend on how the UI is laid out
export const UPDATE_PLACE_LIVING = gql`
  mutation updatePlaceLiving($id: Int!, $country: Country!, $cities: City) {
    updatePlaceLiving(id: $id, country: $country, cities: $cities) {
      id
      country
      city
      cityId
      city_latitude
      city_longitude
    }
  }
`;

export const REMOVE_PLACE_LIVING = gql`
  mutation removePlaceLiving($placeLivingId: Int!) {
    removePlaceLiving(placeLivingId: $placeLivingId) {
      city
    }
  }
`;

export const REMOVE_PLACE_VISITED = gql`
  mutation removePlaceVisited($placeVisitedId: Int!) {
    removePlaceVisited(placeVisitedId: $placeVisitedId) {
      city
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation registerUser(
    $username: String!
    $fullName: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      username: $username
      full_name: $fullName
      email: $email
      password: $password
    ) {
      token
    }
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword(
    $oldPassword: String!
    $password: String!
    $password2: String!
  ) {
    changePassword(
      oldPassword: $oldPassword
      password: $password
      password2: $password2
    )
  }
`;
export const DELETE_USER = gql`
  mutation {
    deleteUser {
      id
      username
    }
  }
`;

export const ADD_USER_INTERESTS = gql`
  mutation addInterest($userInterests: [UserInterest!]) {
    addInterest(userInterests: $userInterests) {
      id
      UserId
      name
    }
  }
`;

export const ADD_USER_SOCIAL = gql`
  mutation addSocial($userSocials: [UserSocial!]) {
    addSocial(userSocials: $userSocials) {
      id
      UserId
      name
      link
    }
  }
`;

export const UPDATE_BASIC_INFO = gql`
  mutation updateBasicInfo($userBasics: UserBasics!) {
    updateBasicInfo(userBasics: $userBasics) {
      username
      email
      birthday
      phone_number
      full_name
      gender
      id
    }
  }
`;

export const UPDATE_USER_AVATAR = gql`
  mutation updateUserAvatar($userAvatar: UserAvatar!) {
    updateUserAvatar(userAvatar: $userAvatar) {
      id
      avatarIndex
      color
    }
  }
`;

export const UPDATE_VISITED_CITY_BASICS = gql`
  mutation updateVisitedCityBasics(
    $id: Int!
    $cityBasics: CityBasics!
  ) {
    updateVisitedCityBasics(
      PlaceVisitedId: $id
      cityBasics: $cityBasics
    ) {
      id
      year
      days
      trip_purpose
      trip_company
    }
  }
`;

export const UPDATE_VISITING_CITY_BASICS = gql`
  mutation updateVisitingCityBasics(
    $id: Int!
    $cityBasics: CityBasics!
  ) {
    updateVisitingCityBasics(
      PlaceVisitingId: $id
      cityBasics: $cityBasics
    ) {
      id
      year
      days
      trip_purpose
      trip_company
    }
  }
`;

export const UPDATE_LIVING_CITY_BASICS = gql`
  mutation updateLivingCityBasics(
    $id: Int!
    $cityBasics: CityBasics!
  ) {
    updateLivingCityBasics(
      PlaceLivingId: $id
      cityBasics: $cityBasics
    ) {
      id
      year
      days
      trip_purpose
      trip_company
    }
  }
`;

export const UPDATE_VISITED_CITY_COMMENTS = gql`
  mutation updateVisitedCityComments(
    $id: Int!
    $cityComments: CityComments!
  ) {
    updateVisitedCityComments(
      PlaceVisitedId: $id
      cityComments: $cityComments
    ) {
      id
      best_comment
      hardest_comment
    }
  }
`;

export const UPDATE_VISITING_CITY_COMMENTS = gql`
  mutation updateVisitingCityComments(
    $id: Int!
    $cityComments: CityComments!
  ) {
    updateVisitingCityComments(
      PlaceVisitingId: $id
      cityComments: $cityComments
    ) {
      id
      best_comment
      hardest_comment
    }
  }
`;

export const UPDATE_LIVING_CITY_COMMENTS = gql`
  mutation updateLivingCityComments(
    $id: Int!
    $cityComments: CityComments!
  ) {
    updateLivingCityComments(
      PlaceLivingId: $id
      cityComments: $cityComments
    ) {
      id
      best_comment
      hardest_comment
    }
  }
`;

export const UPDATE_VISITED_CITY_REVIEWS = gql`
  mutation addPastCityReviews(
    $localCityReviews: [CityReview!]
  ) {
    addPastCityReviews(
      cityReviews: $localCityReviews
    ) {
      id
      attraction_type
      attraction_name
    }
  }
`;

export const UPDATE_VISITING_CITY_REVIEWS = gql`
  mutation addFutureCityReviews(
    $localCityReviews: [CityReview!]
  ) {
    addFutureCityReviews(
      cityReviews: $localCityReviews
    ) {
      id
      attraction_type
      attraction_name
    }
  }
`;

export const UPDATE_LIVING_CITY_REVIEWS = gql`
  mutation addLivingCityReviews(
    $localCityReviews: [CityReview!]
  ) {
    addLivingCityReviews(
      cityReviews: $localCityReviews
    ) {
      id
      attraction_type
      attraction_name
    }
  }
`;