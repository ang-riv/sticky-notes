import React, { useContext } from "react";
import { SearchIcon } from "../utils/svgIconData";
import { NoteListContext } from "../components/NoteListContext";
const Search = () => {
  let { searchActive, setSearchActive } = useContext(NoteListContext);
  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchActive(userInput.toLowerCase());
  };
  return (
    <div className="flex justify-center">
      <label className="input my-2 w-3xs">
        <SearchIcon />
        <input
          className="text-lg"
          type="search"
          placeholder="Search for a note..."
          onChange={handleChange}
          value={searchActive}
        />
      </label>
    </div>
  );
};

export default Search;
