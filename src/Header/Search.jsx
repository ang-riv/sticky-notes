import React, { useContext } from "react";
import { SearchIcon } from "../utils/svgIconData";
import { NoteListContext } from "../components/NoteListContext";
const Search = () => {
  const { searchText, setSearchText } = useContext(NoteListContext);
  return (
    <div className="flex justify-center">
      <label className="input my-2 w-3xs">
        <SearchIcon />
        <input
          className="text-lg"
          type="search"
          placeholder="Search for a note..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </label>
    </div>
  );
};

export default Search;
