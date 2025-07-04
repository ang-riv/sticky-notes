import React, { useContext } from "react";
import { NoteListContext } from "../components/NoteListContext";
import { FilterIcon } from "../utils/svgIconData";

const Filters = () => {
  let { setFilter } = useContext(NoteListContext);
  const dateOptions = ["Newest to Oldest", "Oldest to Newest"];
  const colorOptions = [
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

  return (
    <ul className="menu menu-lg bg-base-200 rounded-box mb-2 w-full border border-gray-300 p-0">
      <li>
        <details>
          <summary className="text-lg">
            <FilterIcon />
            Filter by...
          </summary>
          <ul>
            <li>
              <details>
                <summary>Date</summary>
                <fieldset className="m-0 border-0 p-0">
                  <legend className="sr-only">
                    Filter sticky notes by date:{" "}
                  </legend>
                  <ul>{filterDateOptions()}</ul>
                </fieldset>
              </details>
            </li>
            <li>
              <details>
                <summary>Color</summary>
                <fieldset className="m-0 border-0 p-0">
                  <legend className="sr-only">
                    Filter sticky notes by a specific color:{" "}
                  </legend>
                  <ul>{filterColorOptions()}</ul>
                </fieldset>
              </details>
            </li>
            <li onClick={() => setFilter({ category: "", option: "" })}>
              <summary>Clear Filters</summary>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Filters;
