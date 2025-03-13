import React, { useContext } from "react";
import { SearchIcon, NoteIcon } from "../utils/svgIconData";
import { NoteListContext } from "../components/NoteListContext";
const Header = () => {
  // updating the new number of notes and what color to make them
  let {
    numOfNotes,
    setNumOfNotes,
    noteColor,
    setNoteColor,
    notesList,
    setNotesList,
  } = useContext(NoteListContext);

  const currentDate = () => {
    const date = new Date().toLocaleDateString("en-US", {
      second: "2-digit",
      minute: "2-digit",
      hour: "2-digit",
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });

    // only retrieve date when the note isn't entirely empty
    return date;
  };

  //* making a new note
  const handleNewNote = (color) => {
    setNumOfNotes((numOfNotes += 1));
    setNoteColor([...noteColor, color]);

    const noteDetails = {
      title: "",
      mainText: "",
      date: currentDate(),
      removeNote: false,
      hasMatch: false,
      tags: "",
      bgColor: color,
    };

    setNotesList([...notesList, noteDetails]);
  };
  // sticky note colors
  const noteColors = ["pink-bg", "yellow-bg", "green-bg", "blue-bg"];
  const colorList = [];
  noteColors.map((color, index) => {
    let classList = "";
    const buttonClasses = `btn ${color} h-[40px] w-[40px] rounded-full mr-2`;
    const lastButton = `btn ${color} h-[40px] w-[40px] rounded-full mr-2 last:mr-0`;
    index !== noteColors.length - 1
      ? (classList = buttonClasses)
      : (classList = lastButton);
    colorList.push(
      <button
        className={classList}
        onClick={() => handleNewNote(color)}
      ></button>,
    );
  });
  console.log(notesList);
  return (
    <div className="flex h-fit w-screen flex-col content-center justify-center p-4 outline-1 outline-black">
      {/* TITLE */}
      <div className="mb-2.5 flex h-fit w-fit flex-col items-center justify-center">
        <NoteIcon />
        <h1 className="text-center text-5xl">Super Sticky Notes</h1>
      </div>
      {/* SEARCH */}
      <div className="flex justify-center">
        <label className="input my-2 w-3xs">
          <SearchIcon />
          <input className="text-lg" type="search" placeholder="Search" />
        </label>
      </div>
      {/* FILTER/SORT */}
      <ul className="menu menu-lg bg-base-200 rounded-box mb-2 w-full border border-gray-300 p-0">
        <li>
          <details>
            <summary className="text-lg">Filter by...</summary>
            <ul>
              <li>
                <details>
                  <summary>Date</summary>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm"
                        />
                        Newest to Oldest
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm"
                        />
                        Oldest to Newest
                      </label>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Tag</summary>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm"
                        />
                        Newest to Oldest
                      </label>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
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
          <div className="flex content-center justify-between">{colorList}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
