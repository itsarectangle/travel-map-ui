import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route, NavLink } from "react-router-dom";

import FriendsIcon from "../../../icons/FriendsIcon";
import SearchIcon from "../../../icons/SearchIcon";
import AddFriendIcon from "../../../icons/AddFriendIcon";
import MenuIcon from "../../../icons/MenuIcon";
import FindFriends from "./Friends/FindFriends";
import FriendRequests from "./Friends/FriendRequests";
import CurrentFriends from "./Friends/CurrentFriends";

export default function Friends({ searchText, urlUsername }) {
  const [expanded, handleToggle] = useState(false);
  return (
    <div className="friends content">
      <div
        className={
          expanded ? "sidebar-filter sidebar-filter-active" : "sidebar-filter"
        }
      >
        <a onClick={() => handleToggle(!expanded)}>
          {expanded ? <div></div> : null}
          <MenuIcon />
        </a>
        <NavLink
          exact
          to={
            urlUsername
              ? `/profiles/${urlUsername}/friends`
              : "/profile/friends"
          }
        >
          {expanded ? "current" : null} <FriendsIcon />
        </NavLink>

        <NavLink exact to={urlUsername ? null : "/profile/friends/requests"}>
          {expanded ? "requests" : null} <AddFriendIcon />
        </NavLink>
        <NavLink exact to={urlUsername ? null : "/profile/friends/find"}>
          {expanded ? "find" : null} <SearchIcon />
        </NavLink>
      </div>
      <div className="content-results friends-content">
        <Route
          exact
          path={
            urlUsername
              ? `/profiles/${urlUsername}/friends`
              : "/profile/friends"
          }
          component={() => <CurrentFriends searchText={searchText} />}
        />
        <Route
          path="/profile/friends/requests"
          render={() => <FriendRequests searchText={searchText} />}
        />
        <Route
          path="/profile/friends/find"
          component={() => <FindFriends searchText={searchText} />}
        />
      </div>
    </div>
  );
}

Friends.propTypes = {
  searchText: PropTypes.string,
  handlePageRender: PropTypes.func,
  urlUsername: PropTypes.string,
};
