import React, { useContext } from "react";
import { SearchIcon, NoteIcon } from "../utils/svgIconData";
import { NoteListContext } from "../components/NoteListContext";
import Filters from "./Filters";
import Search from "./Search";
const Header = () => {
  // updating the new number of notes and what color to make them
  const { notesList, setNotesList, searchText } = useContext(NoteListContext);
  const colorOptions = ["pink-bg", "yellow-bg", "green-bg", "blue-bg"];

  //* CURRENT DATE
  const currentDate = () => {
    const date = new Date().toLocaleDateString("en-US", {
      second: "2-digit",
      minute: "2-digit",
      hour: "2-digit",
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });

    return date;
  };
  // * ADD NEW NOTE
  // when btn is pressed, empty object is created with special id
  const handleNewNote = (noteColor) => {
    setNotesList([
      ...notesList,
      {
        title: "",
        description: "",
        color: noteColor,
        id: crypto.randomUUID(),
        date: currentDate(),
      },
    ]);
  };
  console.log(notesList);
  return (
    <div className="flex h-fit w-screen flex-col content-center justify-center p-4 outline-1 outline-black">
      {/* TITLE */}
      <div className="mb-2.5 flex h-fit w-fit flex-col items-center justify-center">
        <NoteIcon />
        <h1 className="text-center text-5xl">Super Sticky Notes</h1>
      </div>
      {/* SEARCH */}
      <Search />
      {/* FILTER/SORT */}
      <Filters />
      {/* NEW NOTE*/}
      <div className="dropdown dropdown-bottom dropdown-center flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-warning rounded-xl text-base"
        >
          + New Note
        </div>
        {/* NOTE COLORS */}
        <div
          tabIndex={0}
          className="dropdown-content bg-base-100 rounded-box z-1 flex w-50 content-center justify-center border border-amber-400 p-2 shadow-md"
        >
          <div className="flex items-center justify-between">
            {colorOptions.map((color) => {
              const colorStyles = `${color} w-10 h-10 rounded-full mx-1`;
              return (
                <div
                  className={colorStyles}
                  onClick={() => handleNewNote(color)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="btn btn-primary w-fit rounded-xl text-base"
          onClick={() => setNotesList([])}
        >
          Clear Notes
        </button>
      </div>
    </div>
  );
};

export default Header;
