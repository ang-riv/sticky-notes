import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import NoteInfo from "./NoteInfo";
import { NoteListContext } from "../components/NoteListContext";
import { useDebounce } from "@uidotdev/usehooks";

const Note = ({ bgColor, id, date }) => {
  // create note with the chosen background color
  const noteMainStyles = `${bgColor} relative h-[290px] w-[290px] rounded-xl border border-gray-400 shadow-sm`;
  let { notesList, setNotesList } = useContext(NoteListContext);
  const [titleValue, setTitleValue] = useState("");
  const [mainTextValue, setMainTextValue] = useState("");

  const debounceTitle = useDebounce(titleValue, 300);
  const debounceMainText = useDebounce(mainTextValue, 300);

  const [alert, setAlert] = useState(false);
  useEffect(() => {
    alert ? console.log("alerting!") : console.log("not working");
  }, [alert]);

  const alertMe = () => {
    setAlert(true);
  };
  // for changing the title and the description using the note id
  const handleTitleChange = (id, e) => {
    const userInput = e.target.value;
    setTitleValue(userInput);
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: debounceTitle } : note,
      ),
    );
  };

  const handleMainTextChange = (id, e) => {
    const userInput = e.target.value;
    setMainTextValue(userInput);
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, mainText: debounceMainText } : note,
      ),
    );
  };

  // remove note by filtering out of arr with id
  const handleRemove = (id) => {
    setAlert(false);
    const updatedNotes = notesList.filter((note) => {
      return note.id !== id;
    });

    setNotesList(updatedNotes);
  };

  const closeAlert = () => {
    setAlert(false);
  };
  return (
    <motion.div className="mb-5 h-fit w-fit" id={id}>
      {alert ? (
        <div role="alert" className="alert alert-info alert-outline">
          <span>
            Hold it! Are you sure you want to delete your sticky note? You'll
            lose all your info!
          </span>
          <button className="btn" onClick={closeAlert}>
            Cancel
          </button>
          <button className="btn" onClick={() => handleRemove(id)}>
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
      {/* main sticky note */}
      <div className={noteMainStyles}>
        <NoteInfo />
        {/* title section */}
        <div className="relative flex h-1/5 w-full items-end justify-between rounded-t-xl border-b-1 border-gray-400 px-2.5 pt-2.5">
          <input
            type="text"
            id="note-title"
            name="title"
            placeholder="Title"
            className="focus: text-xl outline-none"
            spellCheck="false"
            value={titleValue}
            onChange={(e) => handleTitleChange(id, e)}
            autoFocus
          />
          <button className="btn" onClick={alertMe}>
            X
          </button>
        </div>
        {/* main text section */}
        <div className="relative h-5/7 w-full overflow-y-scroll rounded-b-xl p-2.5">
          <textarea
            name="mainText"
            className="text-mg relative z-0 h-full w-full resize-none border-0 focus:outline-none"
            spellCheck="false"
            placeholder="Things to remember today..."
            value={mainTextValue}
            onChange={(e) => handleMainTextChange(id, e)}
          ></textarea>
        </div>
        {/* details of the note */}
        <NoteInfo noteDate={date} />
      </div>
    </motion.div>
  );
};

export default Note;
