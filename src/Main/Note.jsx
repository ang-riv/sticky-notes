import React from "react";

const Note = () => {
  return (
    <div className="h-[300px] w-11/12 rounded-xl border border-gray-400 bg-amber-400 shadow-sm">
      <div className="flex h-1/5 w-full items-end justify-between rounded-t-xl border-b-1 border-gray-400 px-2.5 pt-2.5">
        <input
          type="text"
          name="note-title"
          id="note-title"
          placeholder="Title"
          className="focus: outline-none"
        />
        <button className="btn self-start rounded-xl">X</button>
      </div>
      <div className="h-4/5 w-full overflow-y-scroll p-2.5">
        <textarea
          className="h-full w-full resize-none border-0 focus:outline-none"
          placeholder="Things to remember today..."
        ></textarea>
      </div>
    </div>
  );
};

export default Note;
