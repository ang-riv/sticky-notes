import React, { useContext, useState } from "react";
import { NoteListContext } from "./components/NoteListContext";

const TestSpace = () => {
  // ? main functions: add note, keep track of inner texts, filter, search, delete
  const { notesList, setNotesList } = useContext(NoteListContext);
  const [noteInfo, setNoteInfo] = useState([{ title: "", description: "" }]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleNewNote = (e) => {
    setNotesList([...notesList, { title: title, description: description }]);
    setTitle("");
    setDescription("");
  };
  console.log(notesList);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* simplifying everything with useContext */}
      <div className="join join-vertical">
        <input
          className="input input-warning join-item"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="textarea join-item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="btn btn-warning join-item" onClick={handleNewNote}>
          Add Note
        </button>
      </div>
      {notesList.map((note) => (
        <div className="card card-sm h-fit w-fit border border-amber-300">
          <div className="card-body">
            <h3 className="card-title">{note.title}</h3>
            <p>{note.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestSpace;
