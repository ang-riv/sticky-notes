import React, { useContext, useState, useMemo } from "react";
import { NoteListContext } from "./components/NoteListContext";

const TestSpace = () => {
  // ? main functions: add note, keep track of inner texts, filter, search, delete
  const { notesList, setNotesList } = useContext(NoteListContext);
  const [color, setColor] = useState("");
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

  // * ADD NEW NOTE
  // when btn is pressed, empty object is created with special id
  const handleNewNote = () => {
    setNotesList([
      ...notesList,
      { title: "", description: "", color: "", id: crypto.randomUUID() },
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
      <input
        className="input"
        type="search"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="join">
        <button className="btn btn-accent rounded-xl" onClick={handleNewNote}>
          New
        </button>
        <button className="btn btn-success rounded-xl" onClick={handleNewNote}>
          New
        </button>
        <button className="btn btn-primary rounded-xl" onClick={handleNewNote}>
          New
        </button>
        <button className="btn btn-warning rounded-xl" onClick={handleNewNote}>
          New
        </button>
      </div>

      {/* simplifying everything with useContext */}

      {searchList.map((note) => (
        <div
          key={note.id}
          className="card card-sm h-fit w-fit border border-amber-300"
        >
          <div className="card-body">
            <button
              className="btn border-success h-2.5 w-2.5 border"
              onClick={() => handleRemove(note.id)}
            >
              X
            </button>
            <div className="join join-vertical">
              <input
                className="input input-warning join-item"
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestSpace;
