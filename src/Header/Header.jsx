import React, { useContext } from "react";
import { SearchIcon, NoteIcon } from "../utils/svgIconData";
import { NoteListContext } from "../components/NoteListContext";
import Filters from "./Filters";
import Search from "./Search";
const Header = () => {
  // updating the new number of notes and what color to make them
  const { notesList, setNotesList, searchText } = useContext(NoteListContext);

  return (
    <div className="flex h-fit w-screen flex-col content-center justify-center p-4 outline-1 outline-black">
      {/* TITLE */}
      <div className="mb-2.5 flex h-fit w-fit flex-col items-center justify-center">
        <NoteIcon />
        <h1 className="text-center text-5xl">Super Sticky Notes</h1>
      </div>
      {/* SEARCH */}
      <Search />
      <h2>{searchText}</h2>
      {/* FILTER/SORT */}
      <Filters />
      {/* NEW NOTE*/}
      <div className="dropdown dropdown-bottom dropdown-center flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn rounded-xl text-base font-medium"
        >
          + New Note
        </div>
        {/* NOTE COLORS */}
        <div
          tabIndex={0}
          className="dropdown-content bg-base-100 rounded-box z-1 flex w-50 content-center justify-center p-2 shadow-md"
        >
          <div className="flex content-center justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
