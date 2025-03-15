import React, { useState } from "react";
import { NoteListContext } from "./NoteListContext";

function NoteListProvider({ children }) {
  const [numOfNotes, setNumOfNotes] = useState(0);
  const [noteColor, setNoteColor] = useState([]);
  const [notesList, setNotesList] = useState([]);

  return (
    <NoteListContext.Provider
      value={{
        numOfNotes,
        setNumOfNotes,
        noteColor,
        setNoteColor,
        notesList,
        setNotesList,
      }}
    >
      {children}
    </NoteListContext.Provider>
  );
}

export default NoteListProvider;
