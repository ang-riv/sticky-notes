import React, { useContext } from "react";
import { NoteListContext } from "../components/NoteListContext";

const Filters = () => {
  let { setFiltersActive } = useContext(NoteListContext);
  const dateOptions = ["Newest to Oldest", "Oldest to Newest"];
  const noteColors = ["pink-bg", "yellow-bg", "green-bg", "blue-bg"];

  const selectedFilter = (e, filter) => {
    e.target.checked ? setFiltersActive(filter) : setFiltersActive("");
  };

  const filterOptions = (optionArr) =>
    optionArr.map((option) => (
      <li>
        <label>
          <input
            type="radio"
            name="filter"
            className="radio radio-sm"
            onClick={(e) => selectedFilter(e, option)}
          />
          {option}
        </label>
      </li>
    ));

  return (
    <ul className="menu menu-lg bg-base-200 rounded-box mb-2 w-full border border-gray-300 p-0">
      <li>
        <details>
          <summary className="text-lg">Filter by...</summary>
          <ul>
            <li>
              <details>
                <summary>Date</summary>
                <ul>{filterOptions(dateOptions)}</ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Color</summary>
                <ul>{filterOptions(noteColors)}</ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Filters;
