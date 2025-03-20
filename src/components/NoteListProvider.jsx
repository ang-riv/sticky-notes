import React, { useEffect, useState } from "react";
import { NoteListContext } from "./NoteListContext";
import { useDebounce } from "@uidotdev/usehooks";
function NoteListProvider({ children }) {
  const [noteColor, setNoteColor] = useState([]);
  const [numOfNotes, setNumOfNotes] = useState(0);
  const [notesList, setNotesList] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  const debounceNotes = useDebounce(notesList, 300);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(debounceNotes));
  }, [debounceNotes]);
  //* filters
  const [filter, setFilter] = useState({ category: "", option: "" });

  //* search
  const [searchText, setSearchText] = useState("");

  return (
    <NoteListContext.Provider
      value={{
        numOfNotes,
        setNumOfNotes,
        noteColor,
        setNoteColor,
        notesList,
        setNotesList,
        filter,
        setFilter,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </NoteListContext.Provider>
  );
}

export default NoteListProvider;
