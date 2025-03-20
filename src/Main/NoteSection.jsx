import React, { useContext, useState, useMemo } from "react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  const { notesList, searchText } = useContext(NoteListContext);
  let filteredList = [];
  let noteColors = ["pink-bg", "yellow-bg", "green-bg", "blue-bg"];
  let noteOptions = {
    colors: ["pink-bg", "yellow-bg", "green-bg", "blue-bg"],
    date: ["Newest to Oldest", "Oldest to Newest"],
  };

  //* SEARCH - run only if anything in list or searchTerm changes
  const searchList = useMemo(() => {
    return notesList.filter(
      (note) =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.description.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [notesList, searchText]);
  return (
    <div className="mt-2.5 flex h-full w-full flex-col items-center justify-start">
      {searchList.map((note) => (
        <Note key={note.id} noteDetails={note} />
      ))}
    </div>
  );
};

export default NoteSection;
