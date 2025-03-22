import React, { useState, useContext } from "react";
import { CheckIcon, NoteIcon } from "../utils/svgIconData";
import { motion } from "motion/react";
import { NoteListContext } from "../components/NoteListContext";
import Filters from "./Filters";
import Search from "./Search";
const Header = () => {
  // updating the new number of notes and what color to make them
  const { notesList, setNotesList } = useContext(NoteListContext);
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
  const [showCheck, setShowCheck] = useState("");
  return (
    <div className="flex h-fit w-screen flex-col content-center justify-center p-4">
      {/* TITLE */}
      <div className="mb-2.5 flex h-fit w-fit flex-wrap items-center justify-center">
        <div className="bg-warning mr-2.5 rounded-full p-2">
          <NoteIcon />
        </div>
        <h1 className="my-2 text-center text-5xl">Super Sticky Notes</h1>
      </div>
      {/* NOTE ACTIONS/CONTENT-WRAPPER */}
      <div className="max-w-sm">
        {/* SEARCH */}
        <Search />
        {/* FILTER/SORT */}
        <Filters />
        {/* NOTE BUTTONS */}
        <div className="flex justify-around">
          {/* NEW NOTE*/}
          <div className="dropdown dropdown-start">
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
              className="dropdown-content bg-base-100 rounded-box z-1 mt-1 flex w-50 content-center justify-center border border-gray-300 p-2 shadow-md"
            >
              <div className="flex items-center justify-between">
                {colorOptions.map((color) => {
                  const colorStyles = `${color} ${showCheck === color ? "outline-2 outline-gray-300" : ""} w-10 h-10 rounded-full mx-1 flex justify-center items-center cursor-pointer`;
                  return (
                    <motion.div
                      id={color}
                      className={colorStyles}
                      onClick={() => handleNewNote(color)}
                      onHoverStart={() => setShowCheck(color)}
                      onHoverEnd={() => setShowCheck("")}
                    >
                      {showCheck === color ? <CheckIcon /> : <></>}
                    </motion.div>
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
      </div>
    </div>
  );
};

export default Header;
