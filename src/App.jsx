import React from "react";
import Header from "./Header/Header";
import NoteSection from "./Main/NoteSection";
import NoteListProvider from "./components/NoteListProvider";
import TestSpace from "./TestSpace";
const App = () => {
  return (
    <div data-theme="dark" className="h-screen w-screen">
      <NoteListProvider>
        <TestSpace />
      </NoteListProvider>
    </div>
  );
};

export default App;
