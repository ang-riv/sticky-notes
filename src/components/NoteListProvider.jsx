import React, { useState } from "react";
import { NoteListContext } from "./NoteListContext";

function NoteListProvider({ children }) {
  const [numOfNotes, setNumOfNotes] = useState(0);
  const [noteColor, setNoteColor] = useState([]);
  const [notesList, setNotesList] = useState([]);

  //* filters
  const [filtersActive, setFiltersActive] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(false);

  //* search
  const [searchActive, setSearchActive] = useState(false);
  const [searchNotes, setSearchNotes] = useState(false);

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
        filteredNotes,
        setFilteredNotes,
        searchActive,
        setSearchActive,
        searchNotes,
        setSearchNotes,
      }}
    >
      {children}
    </NoteListContext.Provider>
  );
}

export default NoteListProvider;
