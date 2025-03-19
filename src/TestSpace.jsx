import React, { useContext, useState, useMemo } from "react";
import { NoteListContext } from "./components/NoteListContext";

const TestSpace = () => {
  // ? main functions: add note, keep track of inner texts, filter, search, delete
  const { notesList, setNotesList } = useContext(NoteListContext);
  const [color, setColor] = useState("");
  const btnColors = ["btn-accent", "btn-warning", "btn-primary", "btn-success"];
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filterColor, setFilterColor] = useState("");
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
  const noteOptions = ["All", "pink-bg", "yellow-bg", "green-bg", "blue-bg"];
  const filterOptions = (optionArr) =>
    optionArr.map((option) => (
      <li>
        <label>
          <input type="radio" name="filter" className="radio radio-sm" />
          {option}
        </label>
      </li>
    ));

  // DATE + COLOR FILTER
  const currentFilter = (filter) => {
    const dateOrder = [];
    if (isFilterActive)
      if (filter.type === "color") {
        searchList.filter((note) => note.color === filter.value);
      } else if (filter.type === "date") {
        const dates = searchList.map((note) => Date.parse(note.date));
        // parse all the dates + sort
        // find loop through again, find the corresponding note in the parsed form and return in an arr in that order
        // do it once in one way then pick whether to send it backwards or not if filter.value = newToOld
        for (let i = 0; i < dates.length; i++) {
          const element = dates[i];
          const noteOrder = searchList.find(
            (note) => Date.parse(note.date) === element,
          );
          dateOrder.push(noteOrder);
        }
      }
  };

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
                  <ul>{filterOptions(dateOptions)}</ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Colors</summary>
                  <ul>{filterOptions(noteOptions)}</ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <input
        className="input"
        type="search"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="join">
        {noteOptions.map((color) => {
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
      {/* determine here if searchList or filterList will be rendered! filterList will still use searchList anyway so it should be fine? */}
      {searchList.map((note) => {
        const divStyles = `card card-sm h-fit w-fit border border${note.color}`;
        const inputStyles = `input ${note.color} join-item`;
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
