import React, { useContext } from "react";
import "./UsersSort.css";
import Context from "../context";
import UsersSortItem from "./UserSortItem";

export default function UsersSort() {
  const { regSort, setRegSort, ratingSort, setRatingSort } = useContext(
    Context
  );

  //easy way to add new filter - just push new parameters into classes, sortFuncs, sortBy and namesSort
  let classes = [regSort, ratingSort];
  classes = classes.map((elem) => {
    if (elem) return " users__sort-item--active";
    else return "";
  });
  let sortFuncs = [setRegSort, setRatingSort];
  let sortBy = [regSort, ratingSort];
  let namesSort = ["Дата регистрации", "Рейтинг"];

  return (
    <div className="users__sort">
      Сортировка:
      {classes.map((elem, index) => (
        <UsersSortItem
          classs={classes[index]}
          otherSortFuncs={sortFuncs}
          setSortFunc={sortFuncs[index]}
          sortBy={sortBy[index]}
          nameSort={namesSort[index]}
          key={index}
        />
      ))}
    </div>
  );
}
