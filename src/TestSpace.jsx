import React, { useContext, useState } from "react";
import { NoteListContext } from "./components/NoteListContext";

const TestSpace = () => {
  // ? main functions: add note, keep track of inner texts, filter, search, delete
  const { notesList, setNotesList } = useContext(NoteListContext);
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  // when btn is pressed, empty object is created with special id
  const handleNewNote = () => {
    setNotesList([
      ...notesList,
      { title: "", description: "", color: "", id: crypto.randomUUID() },
    ]);
    setTitle("");
  };
  // when title is
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

  console.log(notesList);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <button className="btn btn-accent" onClick={handleNewNote}>
        Add New Note
      </button>
      {/* simplifying everything with useContext */}

      {notesList.map((note) => (
        <div
          key={note.id}
          className="card card-sm h-fit w-fit border border-amber-300"
        >
          <div className="card-body">
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
