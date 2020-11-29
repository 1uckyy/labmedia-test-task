import React, { useContext } from "react";
import "./UsersSort.css";
import Context from "../context";

export default function UsersSort() {
  const { regSort, setRegSort, ratingSort, setRatingSort } = useContext(
    Context
  );
  let classReg = "users__sort-item";
  if (regSort !== "") classReg += " users__sort-item--active";

  let classRat = "users__sort-item";
  if (ratingSort !== "") classRat += " users__sort-item--active";

  return (
    <div className="users__sort">
      Сортировка:
      <div
        className={classReg}
        onClick={() => {
          setRatingSort("");
          if (regSort === "" || regSort === "desc") setRegSort("asc");
          else setRegSort("desc");
        }}
      >
        Дата регистрации
      </div>
      <div
        className={classRat}
        onClick={() => {
          setRegSort("");
          if (ratingSort === "" || ratingSort === "desc") setRatingSort("asc");
          else setRatingSort("desc");
        }}
      >
        Рейтинг
      </div>
    </div>
  );
}
