import React, { useContext, useState, useMemo } from "react";
import { NoteListContext } from "./components/NoteListContext";

const TestSpace = () => {
  // ? main functions: add note, keep track of inner texts, filter, search, delete, local storage
  const { notesList, setNotesList } = useContext(NoteListContext);
  const [filter, setFilter] = useState({ category: "", option: "" });
  const [searchTerm, setSearchTerm] = useState("");
  //* SEARCH - run only if anything in list or searchTerm changes
  const searchList = useMemo(() => {
    return notesList.filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [notesList, searchTerm]);
  // * FILTERS - DATE AND COLOR
  // filter options
  const dateOptions = ["Newest to Oldest", "Oldest to Newest"];
  const colorOptions = ["All", "pink-bg", "yellow-bg", "green-bg", "blue-bg"];

  // DATE + COLOR FILTER
  const filterDateOptions = () =>
    dateOptions.map((option) => (
      <li key={option}>
        <label>
          <input
            type="radio"
            name="filter"
            className="radio radio-sm"
            onClick={() => setFilter({ category: "date", option: option })}
          />
          {option}
        </label>
      </li>
    ));
  const filterColorOptions = () =>
    colorOptions.map((option) => (
      <li key={option}>
        <label>
          <input
            type="radio"
            name="filter"
            className="radio radio-sm"
            onClick={() => setFilter({ category: "color", option: option })}
          />
          {option}
        </label>
      </li>
    ));

  //* DISPLAYING THE NOTES FROM FILTERS
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

  //* CURRENT DATE
  const currentDate = () => {
    const date = new Date().toLocaleDateString("en-US", {
      second: "2-digit",
      minute: "2-digit",
      hour: "2-digit",
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });

    return date;
  };
  // * ADD NEW NOTE
  // when btn is pressed, empty object is created with special id
  const handleNewNote = (noteColor) => {
    setNotesList([
      ...notesList,
      {
        title: "",
        description: "",
        color: noteColor,
        id: crypto.randomUUID(),
        date: currentDate(),
      },
    ]);
  };
  //* INPUT CHANGE EVENTS
  const handleTitleChange = (id, e) => {
    const userInput = e.target.value;
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: userInput } : note,
      ),
    );
  };

  const handleDescriptionChange = (id, e) => {
    const userInput = e.target.value;
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, description: userInput } : note,
      ),
    );
  };

  // * DELETE NOTE
  const handleRemove = (id) => {
    const updatedNotes = notesList.filter((note) => {
      return note.id !== id;
    });

    setNotesList(updatedNotes);
  };

  // * CLEAR ALL NOTES
  const handleClear = () => {
    setNotesList([]);
  };
  // displayNotes();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <ul className="menu bg-base-300 rounded-box w-65">
        <li>
          <details>
            <summary>Filter By... </summary>
            <ul>
              <li>
                <details>
                  <summary>Date</summary>
                  <ul>{filterDateOptions()}</ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Colors</summary>
                  <ul>{filterColorOptions()}</ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <div className="join">
        <input
          className="input join-item"
          type="search"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-warning" onClick={handleClear}>
          Clear List
        </button>
      </div>
      <div className="join">
        {colorOptions.map((color) => {
          const btnStyles = `btn ${color} rounded-full w-10 h-10 mr-2`;
          return (
            <button
              key={color}
              className={btnStyles}
              onClick={() => handleNewNote(color)}
            ></button>
          );
        })}
      </div>

      {/* simplifying everything with useContext */}
      {displayNotes.map((note) => {
        const divStyles = `card card-sm h-fit w-fit border border${note.color}`;
        const inputStyles = `input ${note.color} join-item text-black`;
        return (
          <div key={note.id} className={divStyles}>
            <div className="card-body">
              <button
                className="btn border-success h-2.5 w-2.5 border"
                onClick={() => handleRemove(note.id)}
              >
                X
              </button>
              <div className="join join-vertical">
                <input
                  className={inputStyles}
                  type="text"
                  spellCheck="false"
                  value={note.title}
                  onChange={(e) => handleTitleChange(note.id, e)}
                />
                <textarea
                  className="textarea join-item"
                  value={note.description}
                  spellCheck="false"
                  onChange={(e) => handleDescriptionChange(note.id, e)}
                ></textarea>
                <div className="join-item h-6">
                  <p className="text-center">{note.date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestSpace;
