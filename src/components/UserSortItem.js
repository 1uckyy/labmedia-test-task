import "./UserSortItem.css";

export default function UsersSortItem({
  classs,
  otherSortFuncs,
  setSortFunc,
  sortBy,
  nameSort,
}) {
  return (
    <div
      className={"users__sort-item" + classs}
      onClick={() => {
        //reset other filtres
        otherSortFuncs.forEach((a) => a(""));
        //set needed filter
        if (sortBy === "" || sortBy === "desc") setSortFunc("asc");
        else setSortFunc("desc");
      }}
    >
      {nameSort}
    </div>
  );
}
