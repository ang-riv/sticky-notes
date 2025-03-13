import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import NoteInfo from "./NoteInfo";
import Modal from "../components/Modal";
import { NoteListContext } from "../components/NoteListContext";

const Note = ({ noteBackgroundColor }) => {
  let { notesList, setNotesList } = useContext(NoteListContext);
  // create note with the chosen background color
  const noteMainStyles = `${noteBackgroundColor} relative h-[290px] w-[290px] rounded-xl border border-gray-400 shadow-sm`;

  const [titleValue, setTitleValue] = useState("");
  const [mainTextValue, setMainTextValue] = useState("");

  // keep track of the title and main text
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const handleMainTextChange = (e) => {
    setMainTextValue(e.target.value);
  };

  // keep track of the date
  const currentDate = () => {
    const date = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });

    // only retrieve date when the note isn't entirely empty
    if (titleValue !== "" || mainTextValue !== "") return date;
  };

  // trigger removal
  // if the x btn is pressed, trigger the modal and give it the date.
  //! KEEP TRACK OF NOTES IN THE NOTES ARR WITH DATE AND TITLE?
  // keep track of the notes info
  const noteDetails = {
    title: titleValue,
    mainText: mainTextValue,
    date: currentDate(),
    removeNote: false,
    hasMatch: false,
    tags: "",
  };

  const deleteDetails = {
    title: noteDetails.note,
    date: noteDetails.date,
    removeNote: noteDetails.removeNote,
  };

  // if the title and the mainText isn't empty, then push it into the notesArr
  //! needs an update thing because just pushing this wouldn't work
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
          <Modal deleteDetails={deleteDetails} />
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
        <NoteInfo noteDate={noteDetails.date} />
      </div>
    </motion.div>
  );
};

export default Note;
