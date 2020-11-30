import React, { useContext } from "react";
import UserItem from "./UserItem";
import "./UsersTable.css";
import Context from "../context";

export default function UsersTable({ users }) {
  const { curPage, setPage } = useContext(Context);
  
  //when last page will clear
  if (users.length === curPage) setPage(curPage - 5);

  return (
    <div className="users__table-container">
      <table className="users__table">
        <thead>
          <tr>
            <th>Имя пользователя</th>
            <th>E-mail</th>
            <th>Дата регистрации</th>
            <th>Рейтинг</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.slice(curPage, curPage + 5).map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </tbody>
      </table>
      <div className="users__table-pagenav">
        <button
          className="users__table-btn__pagenav"
          disabled={curPage === 0}
          onClick={() => setPage(curPage - 5)}
        >
          Назад
        </button>
        <button
          className="users__table-btn__pagenav"
          disabled={users.length <= curPage + 5}
          onClick={() => setPage(curPage + 5)}
        >
          Вперёд
        </button>
      </div>
    </div>
  );
}
