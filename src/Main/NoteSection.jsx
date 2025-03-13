import React, { useContext } from "react";
import { animate, AnimatePresence } from "motion/react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  let { noteColor, notesList } = useContext(NoteListContext);
  //* create a note from the notes list, using that as the props
  const displayNotes = notesList.map((details) => {
    return <Note details={details} key={details.date} />;
  });

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
      {displayNotes}
    </div>
  );
};

export default NoteSection;
