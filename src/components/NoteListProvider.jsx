import React, { useState } from "react";
import { NoteListContext } from "./NoteListContext";

function NoteListProvider({ children }) {
  const [numOfNotes, setNumOfNotes] = useState(0);
  const [noteColor, setNoteColor] = useState([]);

  return (
    <NoteListContext.Provider
      value={{ numOfNotes, setNumOfNotes, noteColor, setNoteColor }}
    >
      {children}
    </NoteListContext.Provider>
  );
}

export default NoteListProvider;
