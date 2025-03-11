import React from "react";

const NoteInfo = () => {
  return (
    <div>
      <div className="absolute bottom-0 z-10 h-3/12 w-full rounded-b-xl bg-amber-50 p-2.5">
        <p>Created: </p>
        <div className="flex w-full flex-row">
          <div className="">
            <p>Tags:</p>
          </div>
          <div className="w-full">
            <ul className="flex flex-row justify-evenly">
              <li>fdsf</li>
              <li>fsdf</li>
              <li>gds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteInfo;
