import React, {useEffect} from "react";
import UsersSearch from "./components/UsersSearch";
import UsersSort from "./components/UsersSort";
import UsersTable from "./components/UsersTable";
import "./Users.css";

function Users() {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
      .then((response) => response.json())
      .then((users) => {
          setUsers(users);
      });
  }, []);

  return (
    <div className="users">
      <h1 className="users__title">Список пользователей</h1>
      <UsersSearch />
      <UsersSort />
      <UsersTable users={users}/>
    </div>
  );
}

export default Users;
