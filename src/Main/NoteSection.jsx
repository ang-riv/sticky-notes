import React, { useContext, useState, useMemo } from "react";
import Note from "./Note";
import { NoteListContext } from "../components/NoteListContext";
const NoteSection = () => {
  // create a note using the array with the bg color chosen
  const { notesList, searchText, filter } = useContext(NoteListContext);
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
  // * FILTERS - render notes depending on search + filter

  const displayNotes = useMemo(() => {
    // color
    if (filter.category === "color") {
      if (filter.option != "All") {
        const filterColor = searchList.filter(
          (note) => note.color === filter.option,
        );
        return filterColor;
      } else {
        return searchList;
      }
    } else if (filter.category === "date") {
      // date
      const filterDate = [];
      // parse + sort old to new
      const parsedDates = searchList
        .map((note) => Date.parse(note.date))
        .sort((a, b) => a - b);
      // find the note in the correct date order
      for (let i = 0; i < parsedDates.length; i++) {
        const date = parsedDates[i];
        const noteOrder = searchList.find(
          (note) => Date.parse(note.date) === date,
        );
        filterDate.push(noteOrder);
      }

      if (filterOption === "Newest to Oldest") {
        return filterDate.reverse();
      } else {
        return filterDate;
      }
    } else {
      return searchList;
    }
  }, [filter, searchList]);

  return (
    <div className="mt-2.5 flex h-full w-full flex-col items-center justify-start">
      {displayNotes.map((note) => (
        <Note key={note.id} noteDetails={note} />
      ))}
    </div>
  );
};

export default NoteSection;
