import React, { useEffect } from "react";
import UsersSearch from "./components/UsersSearch";
import UsersSort from "./components/UsersSort";
import UsersTable from "./components/UsersTable";
import "./Users.css";
import Context from "./context";
import { CompareByRegistr, CompareByRating } from "./CompareFunctions";

function Users() {
  const [curPage, setPage] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [regSort, setRegSort] = React.useState("");
  const [ratingSort, setRatingSort] = React.useState("");

  useEffect(() => {
    fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  function searchUser(searchText) {
    setSearch(searchText);
  }

  //user search calculation
  function calcFilterUsers() {
    return search
      ? users.filter((user) => {
          if (
            user.username
              .toLowerCase()
              .match(new RegExp(search.toLowerCase())) ||
            user.email.toLowerCase().match(new RegExp(search.toLowerCase()))
          )
            return user;
          return false;
        })
      : users;
  }

  function sortByRegistr(filteredUsers) {
    switch (regSort) {
      case "asc":
        return [...filteredUsers].sort(CompareByRegistr);
      case "desc":
        return [...filteredUsers].sort(CompareByRegistr).reverse();
      default:
        return filteredUsers;
    }
  }

  function sortByRating(filteredUsers) {
    switch (ratingSort) {
      case "asc":
        return [...filteredUsers].sort(CompareByRating);
      case "desc":
        return [...filteredUsers].sort(CompareByRating).reverse();
      default:
        return filteredUsers;
    }
  }

  return (
    <Context.Provider
      value={{
        curPage,
        setPage,
        ratingSort,
        setRatingSort,
        regSort,
        setRegSort,
        search,
        searchUser,
      }}
    >
      <div className="users">
        <h1 className="users__title">Список пользователей</h1>
        <UsersSearch />
        <UsersSort />
        <UsersTable users={sortByRating(sortByRegistr(calcFilterUsers()))} />
      </div>
    </Context.Provider>
  );
}

export default Users;
