import React, { useContext, useState, useMemo } from "react";
import { animate, AnimatePresence } from "motion/react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  let { notesList, filtersActive, searchActive } = useContext(NoteListContext);

  let filteredList = [];
  let searchList = [];
  let noteColors = ["pink-bg", "yellow-bg", "green-bg", "blue-bg"];
  let noteOptions = {
    colors: ["pink-bg", "yellow-bg", "green-bg", "blue-bg"],
    date: ["Newest to Oldest", "Oldest to Newest"],
  };
  // noteOptions.colors[0] to replace the switch statement
  const filterMemo = useMemo(() => {
    return notesList.filter((note) =>
      note.title.toLowerCase().includes(searchActive),
    );
  }, [notesList, searchActive]);
  // if date is active, check what type, sort them in the correct order
  const showNotes = () => {
    // find the dates + colors of the notes
    const dates = notesList.map((note) => Date.parse(note.date));

    // sort them based on chosen order
    let dateOrder = [];

    //* filters are on (date or color)
    // find the note with those dates and push them in that order into a new arr and return
    for (let i = 0; i < dates.length; i++) {
      const element = dates[i];
      const noteOrder = notesList.find(
        (note) => Date.parse(note.date) === element,
      );
      dateOrder.push(noteOrder);
    }
    const colors = noteColors.map(
      (color) =>
        (filteredList = notesList.filter((note) => note.bgColor === color)),
    );
    //! Replace with object of arrays --> if filtersActive matches anything in the color arr or date arr then dateOrder for date or colors arr ^ with return?
    switch (filtersActive) {
      case "Newest to Oldest":
        filteredList = dateOrder.reverse();
        break;
      case "Oldest to Newest":
        filteredList = dateOrder;
        break;
      case "pink-bg":
        filteredList = notesList.filter((note) => note.bgColor === "pink-bg");
        break;
      case "yellow-bg":
        filteredList = notesList.filter((note) => note.bgColor === "yellow-bg");
        break;
      case "green-bg":
        filteredList = notesList.filter((note) => note.bgColor === "green-bg");
        break;
      case "blue-bg":
        filteredList = notesList.filter((note) => note.bgColor === "blue-bg");
        break;
      default:
        filteredList = notesList;
        break;
    }
  };
  //* search
  // if a filter is active (date or colors) but search isn't active
  //showNotes();
  const findNote = () => {
    for (let i = 0; i < notesList.length; i++) {
      const note = notesList[i];
      const title = note.title.toLowerCase();
      const mainText = note.mainText.toLowerCase();

      if (title.includes(searchActive) || mainText.includes(searchActive)) {
        searchList.push(note);
      }
    }
  };
  //if (searchActive != "") findNote();
  //* displaying the right list depending on if filter or search are active
  const displayNotes = (list) =>
    list.map((details) => (
      <Note
        title={details.title}
        mainText={details.mainText}
        key={details.id}
        id={details.id}
        date={details.date}
        bgColor={details.bgColor}
      />
    ));
  console.log(filterMemo);
  // have it center on mobile and tablet, then change to content start justify start and wrap
  return (
    <div className="mt-2.5 flex h-full w-full flex-col items-center justify-start">
      {filterMemo.map((details) => (
        <Note
          title={details.title}
          mainText={details.mainText}
          key={details.id}
          id={details.id}
          date={details.date}
          bgColor={details.bgColor}
        />
      ))}
    </div>
  );
};

export default NoteSection;
