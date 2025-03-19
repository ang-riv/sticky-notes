import React, { useState } from "react";
import { NoteListContext } from "./NoteListContext";

function NoteListProvider({ children }) {
  const [numOfNotes, setNumOfNotes] = useState(0);
  const [noteColor, setNoteColor] = useState([]);
  const [notesList, setNotesList] = useState([]);

  //* filters
  const [filtersActive, setFiltersActive] = useState("");

  //* search
  const [searchActive, setSearchActive] = useState("");

  return (
    <NoteListContext.Provider
      value={{
        numOfNotes,
        setNumOfNotes,
        noteColor,
        setNoteColor,
        notesList,
        setNotesList,
        filtersActive,
        setFiltersActive,
        searchActive,
        setSearchActive,
      }}
    >
      {children}
    </NoteListContext.Provider>
  );
}

export default NoteListProvider;
