import React, { useContext } from "react";
import "./UsersSearch.css";
import loupe from "../images/loupe.svg";
import clean from "../images/data-cleaning.svg";
import Context from "../context";

export default function UsersSearch() {
  const {
    ratingSort,
    setRatingSort,
    regSort,
    setRegSort,
    search,
    searchUser,
  } = useContext(Context);

  function clearAction() {
    document.getElementsByClassName("users__search-field")[0].value = "";
    searchUser("");
    setRegSort("");
    setRatingSort("");
  }

  return (
    <div className="users__search">
      <div className="users__search-mainbox">
        <img className="users__search-loupe__img" src={loupe} alt="" />
        <input
          className="users__search-field"
          type="text"
          placeholder="Поиск по имени или e-mail"
          onChange={(event) => searchUser(event.target.value)}
        />
      </div>
      {ratingSort || regSort || search ?
        <button
          className="users__search-btn__clean"
          onClick={() => clearAction()}
        >
          <img className="users__search-clean__img" src={clean} alt="" />
          Очистить фильтр
        </button> : null
      }
    </div>
  );
}
