import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import NoteInfo from "./NoteInfo";
import { NoteListContext } from "../components/NoteListContext";
import { WarningIcon } from "../utils/svgIconData";

const Note = ({ noteDetails }) => {
  const { notesList, setNotesList } = useContext(NoteListContext);
  const { id, color, date, title, description } = noteDetails;
  // create note with the chosen background color
  const noteMainStyles = ` ${color} relative h-[290px] w-[290px] rounded-xl border border-gray-400 shadow-sm`;

  const [alert, setAlert] = useState(false);

  const alertMe = () => {
    setAlert(true);
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

  // for changing the title and the description using the note id
  return (
    <motion.div className="mb-5 h-fit w-fit">
      {/* main sticky note */}
      <div className={noteMainStyles}>
        {alert ? (
          <div
            role="alert"
            className="alert alert-warning absolute z-20 flex h-full w-full flex-col items-center justify-center border-4 border-amber-800"
          >
            <div className="flex items-center justify-baseline">
              <WarningIcon />
              <span className="px-3 text-4xl font-bold">Hold it!</span>
              <WarningIcon />
            </div>

            <p className="w-full text-center text-[1.125em]">
              Are you sure you want to delete your sticky note? You'll lose all
              your info!
            </p>
            <div>
              <button
                className="btn btn-lg mt-2.5 mr-5 rounded-xl p-4"
                onClick={() => setAlert(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-lg mt-2.5 rounded-xl p-4"
                onClick={() => handleRemove(id)}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        <NoteInfo />
        {/* title section */}
        <div className="relative flex h-1/5 w-full items-end justify-between rounded-t-xl border-b-1 border-gray-400 px-2.5 pt-2.5">
          <input
            type="text"
            id="note-title"
            name="title"
            placeholder="Title"
            className="focus: text-xl text-gray-800 outline-none"
            spellCheck="false"
            value={title}
            onChange={(e) => handleTitleChange(id, e)}
          />
          <button className="btn" onClick={alertMe}>
            X
          </button>
        </div>
        {/* main text section */}
        <div className="relative h-5/7 w-full overflow-y-scroll rounded-b-xl p-2.5">
          <textarea
            name="mainText"
            className="text-mg relative z-0 h-full w-full resize-none border-0 text-gray-800 focus:outline-none"
            spellCheck="false"
            placeholder="Things to remember today..."
            value={description}
            onChange={(e) => handleDescriptionChange(id, e)}
          ></textarea>
        </div>
        {/* details of the note */}
        <NoteInfo date={date} />
      </div>
    </motion.div>
  );
};

export default Note;
