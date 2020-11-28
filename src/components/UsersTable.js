import UserItem from "./UserItem";
import "./UsersTable.css";

export default function UsersTable(props) {
  return (
    <table className="users__table">
      <thead>
        <tr>
          <th>Имя пользователя</th>
          <th>E-mail</th>
          <th>Дата регистрации</th>
          <th>Рейтинг</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
}
