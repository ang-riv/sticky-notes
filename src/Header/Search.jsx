import React, { useContext } from "react";
import { SearchIcon } from "../utils/svgIconData";
import { NoteListContext } from "../components/NoteListContext";
const Search = () => {
  const { searchText, setSearchText } = useContext(NoteListContext);
  return (
    <div className="flex justify-center">
      <label className="input mb-2 w-full">
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
