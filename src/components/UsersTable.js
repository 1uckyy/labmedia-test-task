import UserItem from "./UserItem";
import "./UsersTable.css";

export default function UsersTable(props) {
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
          {props.users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
