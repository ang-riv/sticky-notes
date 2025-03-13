import React, { useContext } from "react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  let { noteColor } = useContext(NoteListContext);

  const notes = noteColor.map((color, index) => {});
  // have it center on mobile and tablet, then change to content start justify start and wrap
  return (
    <div className="mt-2.5 flex h-screen w-screen content-center justify-center">
      <Note noteBackgroundColor="pink-bg" />
    </div>
  );
};

export default NoteSection;
