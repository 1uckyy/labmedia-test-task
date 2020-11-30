import React, { useEffect } from "react";
import UsersSearch from "./components/UsersSearch";
import UsersSort from "./components/UsersSort";
import UsersTable from "./components/UsersTable";
import Loader from "./components/Tools/Loader";
import "./Users.css";
import Context from "./context";
import { CompareByRegistr, CompareByRating } from "./CompareFunctions";

function Users() {
  const [curPage, setPage] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [regSort, setRegSort] = React.useState("");
  const [ratingSort, setRatingSort] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  function searchUser(searchText) {
    if (searchText !== "") setPage(0);
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

  function removeUser(id) {
    setUsers(users.filter((note) => note.id !== id));
  }

  function sortFunc(filteredUsers, sortBy, compareBy) {
    switch (sortBy) {
      case "asc":
        return [...filteredUsers].sort(compareBy);
      case "desc":
        return [...filteredUsers].sort(compareBy).reverse();
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
        removeUser,
      }}
    >
      <div className="users">
        <h1 className="users__title">Список пользователей</h1>
        <UsersSearch />
        <UsersSort />
        {loading && <Loader />}
        {users.length ? (
          <UsersTable users={sortFunc(sortFunc(calcFilterUsers(), regSort, CompareByRegistr), ratingSort, CompareByRating)} />
        ) : loading ? null : (
          <h3 className="users__empty">Нет пользователей</h3>
        )}
      </div>
    </Context.Provider>
  );
}

export default Users;
