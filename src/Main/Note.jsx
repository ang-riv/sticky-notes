import React from "react";
import NoteInfo from "./NoteInfo";

const Note = () => {
  return (
    <div className="h-fit w-fit">
      {/* main sticky note */}
      <div className="pink-bg relative h-[300px] w-[300px] rounded-xl border border-gray-400 shadow-sm">
        <NoteInfo />
        {/* title section */}
        <div className="relative flex h-1/5 w-full items-end justify-between rounded-t-xl border-b-1 border-gray-400 px-2.5 pt-2.5">
          <input
            type="text"
            name="note-title"
            id="note-title"
            placeholder="Title"
            className="focus: outline-none"
          />
          <button className="btn self-start rounded-xl">X</button>
        </div>
        {/* main text section */}
        <div className="relative h-5/7 w-full overflow-y-scroll rounded-b-xl p-2.5">
          <textarea
            className="relative z-0 h-full w-full resize-none border-0 focus:outline-none"
            placeholder="Things to remember today..."
          ></textarea>
        </div>
        <NoteInfo />
      </div>
    </div>
  );
};

export default Note;
