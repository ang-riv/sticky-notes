import React from "react";

const NoteInfo = ({ date }) => {
  const tagArr = [];
  const userTags = ["new", "beauty", "school", "other"];

  userTags.map((tag, index) => {
    tagArr.push(
      <li
        className="text-ms ml-1 flex h-fit w-fit items-center justify-evenly rounded-full border border-gray-300 bg-white px-2"
        key={index}
      >
        <button className="btn mr-1 h-5 w-5 rounded-full border p-0 text-sm">
          x
        </button>
        {tag}
      </li>,
    );
  });
  return (
    <div>
      <div className="absolute bottom-0 z-10 h-2/12 w-full rounded-b-xl bg-gray-100 p-2">
        <p className="text-gray-800"> Created: {date}</p>
      </div>
    </div>
  );
};

export default NoteInfo;
