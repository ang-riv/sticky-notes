import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import NoteInfo from "./NoteInfo";
import Modal from "../components/Modal";
import { NoteListContext } from "../components/NoteListContext";
import { useDebounce } from "@uidotdev/usehooks";

const Note = ({ details }) => {
  let { notesList, setNotesList } = useContext(NoteListContext);
  // create note with the chosen background color
  const noteMainStyles = `${details.bgColor} relative h-[290px] w-[290px] rounded-xl border border-gray-400 shadow-sm`;

  const [titleValue, setTitleValue] = useState("");
  const [mainTextValue, setMainTextValue] = useState("");

  const debounceTitle = useDebounce(titleValue, 300);
  const debounceMainText = useDebounce(mainTextValue, 300);

  // keep track of the title and main text
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
    details.title = debounceTitle;
    console.log(notesList);
  };
  const handleMainTextChange = (e) => {
    setMainTextValue(e.target.value);
    details.mainText = debounceMainText;
  };

  // trigger removal
  // if the x btn is pressed, trigger the modal and give it the date.

  //* see if the arr can handle the change of removeNote
  const handleRemove = () => {
    details.removeNote = true;
    console.log(notesList);
  };

  // if the title and the mainText isn't empty, then push it into the notesArr
  return (
    <motion.div className="h-fit w-fit">
      {/* main sticky note */}
      <div className={noteMainStyles}>
        <NoteInfo />
        {/* title section */}
        <div className="relative flex h-1/5 w-full items-end justify-between rounded-t-xl border-b-1 border-gray-400 px-2.5 pt-2.5">
          <input
            type="text"
            id="note-title"
            placeholder="Title"
            className="focus: text-xl outline-none"
            spellCheck="false"
            value={titleValue}
            onChange={handleTitleChange}
          />
          {/* delete note btn/modal */}
          <Modal deleteDetails={details} />
          <button className="btn" onClick={handleRemove}>
            Remove Note
          </button>
        </div>
        {/* main text section */}
        <div className="relative h-5/7 w-full overflow-y-scroll rounded-b-xl p-2.5">
          <textarea
            className="text-mg relative z-0 h-full w-full resize-none border-0 focus:outline-none"
            spellCheck="false"
            placeholder="Things to remember today..."
            value={mainTextValue}
            onChange={handleMainTextChange}
          ></textarea>
        </div>
        {/* details of the note */}
        <NoteInfo noteDate={details.date} />
      </div>
    </motion.div>
  );
};

export default Note;
