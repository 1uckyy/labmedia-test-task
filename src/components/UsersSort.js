import './UsersSort.css'

export default function UsersSort() {
  return (
    <div className="users__sort">
      Сортировка:
      <div className="users__sort-item users__sort-item--active">Дата регистрации</div>
      <div className="users__sort-item">Рейтинг</div>
    </div>
  );
}
