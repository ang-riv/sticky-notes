import React from "react";
import Note from "./Note";

const NoteSection = () => {
  // have it center on mobile and tablet, then change to content start justify start and wrap
  return (
    <div className="mt-2.5 flex h-screen w-screen content-center justify-center">
      <Note />
    </div>
  );
};

export default NoteSection;
