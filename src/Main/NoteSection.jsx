import React, { useContext } from "react";
import { animate, AnimatePresence } from "motion/react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  let { noteColor } = useContext(NoteListContext);

  // have it center on mobile and tablet, then change to content start justify start and wrap
  return (
    <div className="mt-2.5 flex h-full w-full flex-col items-center justify-start">
      <AnimatePresence mode="sync" animate={{ rotate: 360 }}>
        {noteColor.map((color) => {
          return <Note key={color} noteBackgroundColor={color} />;
        })}
      </AnimatePresence>
    </div>
  );
};

export default NoteSection;
