import React from "react";

const NoteInfo = () => {
  const tagArr = [];
  const userTags = ["grocery", "beauty", "school", "other"];

  userTags.map((tag) => {
    tagArr.push(
      <li className="text-ms ml-1 flex h-fit w-fit items-center justify-evenly rounded-full border border-gray-300 bg-white px-2">
        <button className="btn mr-1 h-5 w-5 rounded-full border p-0 text-sm">
          x
        </button>
        {tag}
      </li>,
    );
  });
  const date = "03/11/25";
  return (
    <div>
      <div className="absolute bottom-0 z-10 h-3/12 w-full rounded-b-xl bg-gray-50 p-2.5">
        <p>Created: {date}</p>
        <div className="flex w-full flex-row">
          <div className="">
            <p>Tags: </p>
          </div>
          <div className="w-full overflow-x-scroll">
            <ul className="flex flex-row justify-evenly">{tagArr}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteInfo;
