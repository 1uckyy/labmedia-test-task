import "./UsersSearch.css";
import loupe from "../images/loupe.svg";
import clean from "../images/data-cleaning.svg";

export default function UsersSearch() {
  return (
    <div className="users__search">
      <div className="users__search-mainbox">
        <img className="users__search-loupe__img" src={loupe} alt="" />
        <input
          className="users__search-field"
          type="text"
          placeholder="Поиск по имени или e-mail"
        />
      </div>
      <button className="users__search-btn__clean">
        <img className="users__search-clean__img" src={clean} alt="" />
        Очистить фильтр
      </button>
    </div>
  );
}
