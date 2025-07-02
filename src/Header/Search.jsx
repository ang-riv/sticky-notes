import React, { useContext } from "react";
import { SearchIcon } from "../utils/svgIconData";
import { NoteListContext } from "../components/NoteListContext";
const Search = () => {
  const { searchText, setSearchText } = useContext(NoteListContext);
  return (
    <div className="flex-col justify-center">
      <label htmlFor="searchInput" className="sr-only text-lg">
        Search for a note
      </label>
      <div className="input mb-2 w-full">
        <SearchIcon />
        <input
          className="text-lg"
          name="search"
          id="searchInput"
          type="search"
          placeholder="Search for a note..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </div>
    </div>
  );
};

export default Search;
