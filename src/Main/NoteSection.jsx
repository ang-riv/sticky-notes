import React, { useContext, useState } from "react";
import { animate, AnimatePresence } from "motion/react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  let { notesList, filtersActive } = useContext(NoteListContext);

  let filteredList = [];
  //* create a note from the notes list, using that as the props
  const displayNotes = notesList.map((details) => {
    return (
      <Note
        title={details.title}
        mainText={details.mainText}
        key={details.id}
        id={details.id}
        date={details.date}
        bgColor={details.bgColor}
      />
    );
  });

  //* displaying the right list depending on if filter or search are active
  const displayList = (list) =>
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

  // if date is active, check what type, sort them in the correct order
  const showNotes = () => {
    // find the dates + colors of the notes
    const dates = notesList.map((note) => Date.parse(note.date));

    // sort them based on chosen order
    let dateOrder = [];

    //* filters are on
    // find the note with those dates and push them in that order into a new arr and return
    for (let i = 0; i < dates.length; i++) {
      const element = dates[i];
      const noteOrder = notesList.find(
        (note) => Date.parse(note.date) === element,
      );
      dateOrder.push(noteOrder);
    }

    switch (filtersActive) {
      case "Newest to Oldest":
        filteredList = dateOrder;
        break;
      case "Oldest to Newest":
        filteredList = dateOrder.reverse();
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
    console.log(filteredList);
  };
  showNotes();
  // have it center on mobile and tablet, then change to content start justify start and wrap
  return (
    <div className="mt-2.5 flex h-full w-full flex-col items-center justify-start">
      {/*  
      <AnimatePresence mode="sync" animate={{ rotate: 360 }}>
        {noteColor.map((color) => {
          return <Note key={color} noteBackgroundColor={color} />;
        })}
      </AnimatePresence>
      <div>{notesList}</div>
      */}
      {displayList(filteredList)}
    </div>
  );
};

export default NoteSection;
