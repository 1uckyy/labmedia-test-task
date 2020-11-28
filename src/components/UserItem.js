import "./UserItem.css";

export default function UserItem({ user }) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.registration_date}</td>
      <td>{user.rating}</td>
    </tr>
  );
}
