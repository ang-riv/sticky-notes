import React, { useEffect, useState, createContext } from "react";
import { useDebounce } from "@uidotdev/usehooks";
export const NoteListContext = createContext();

export const NoteListProvider = ({ children }) => {
  const [noteColor, setNoteColor] = useState([]);
  const [numOfNotes, setNumOfNotes] = useState(0);
  const [notesList, setNotesList] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });
  const debounceNotes = useDebounce(notesList, 300);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(debounceNotes));
  }, [debounceNotes]);
  const [filter, setFilter] = useState({
    category: "date",
    option: "Newest to Oldest",
  });
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
