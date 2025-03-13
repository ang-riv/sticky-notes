import React, { useState } from "react";
import { NoteListContext } from "./NoteListContext";

function NoteListProvider({ children }) {
  const [numOfNotes, setNumOfNotes] = useState(0);
  const [noteColor, setNoteColor] = useState([]);

  // object with the note info, maybe with creating a new object
  // with each new note, it will create a new object that holds that info

  /*
    noteList, setNoteList = [];
    newNote, setNewNote = {}
    const noteInfo = {
      title:,
      text:,
      remove: false,
      etc.
    };
    const note = Object.create(noteInfo);
  */
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
