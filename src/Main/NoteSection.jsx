import React, { useContext } from "react";
import { animate, AnimatePresence } from "motion/react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  let { noteColor, notesList } = useContext(NoteListContext);
  //! maybe put date here?
  //! or notes details needs to be here, created new, and pushed into an array

  // have it center on mobile and tablet, then change to content start justify start and wrap
  return (
    <div className="mt-2.5 flex h-full w-full flex-col items-center justify-start">
      <AnimatePresence mode="sync" animate={{ rotate: 360 }}>
        {noteColor.map((color) => {
          return <Note key={color} noteBackgroundColor={color} />;
        })}
      </AnimatePresence>
      <div>{notesList}</div>
    </div>
  );
};

export default NoteSection;
