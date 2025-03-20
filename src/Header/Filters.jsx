import React, { useContext } from "react";
import { NoteListContext } from "../components/NoteListContext";

const Filters = () => {
  let { filter, setFilter } = useContext(NoteListContext);
  const dateOptions = ["Newest to Oldest", "Oldest to Newest"];
  const colorOptions = [
    { title: "All", color: "" },
    { title: "Pink", color: "pink-bg" },
    { title: "Yellow", color: "yellow-bg" },
    { title: "Green", color: "green-bg" },
    { title: "Blue", color: "blue-bg" },
  ];

  const filterDateOptions = () =>
    dateOptions.map((option) => (
      <li key={option}>
        <label>
          <input
            type="radio"
            name="filter"
            className="radio radio-sm"
            onClick={() => setFilter({ category: "date", option: option })}
          />
          {option}
        </label>
      </li>
    ));

  const filterColorOptions = () =>
    colorOptions.map((option) => (
      <li key={option.title}>
        <label>
          <input
            type="radio"
            name="filter"
            className="radio radio-sm"
            onClick={() =>
              setFilter({
                category: "color",
                option: option.color,
              })
            }
          />
          {option.title}
        </label>
      </li>
    ));

  console.log(filter);
  return (
    <ul className="menu menu-lg bg-base-200 rounded-box mb-2 w-full border border-gray-300 p-0">
      <li>
        <details>
          <summary className="text-lg">Filter by...</summary>
          <ul>
            <li>
              <details>
                <summary>Date</summary>
                <ul>{filterDateOptions()}</ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Color</summary>
                <ul>{filterColorOptions()}</ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Filters;
