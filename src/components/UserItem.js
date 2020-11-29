import "./UserItem.css";

export default function UserItem({ user }) {
  return (
    <tr>
      <td className="users__table-username">{user.username}</td>
      <td>{user.email}</td>
      <td>
        {new Date(user.registration_date).toLocaleString("ru-RU", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </td>
      <td>{user.rating}</td>
      <td>
        <button className="users__table-btn__delete">&times;</button>
      </td>
    </tr>
  );
}
