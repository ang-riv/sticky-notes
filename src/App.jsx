import React, { useState } from "react";
import Header from "./Header/Header";
import NoteSection from "./Main/NoteSection";
import NoteListProvider from "./components/NoteListProvider";
import TestSpace from "./TestSpace";
const App = () => {
  // switch between components
  const [toggleTest, setToggleTest] = useState(false);
  return (
    <div data-theme="dark" className="h-screen w-screen">
      <NoteListProvider>
        <button
          className="btn btn-accent"
          onClick={() => setToggleTest(!toggleTest)}
        >
          Toggle Views
        </button>
        {toggleTest ? (
          <TestSpace />
        ) : (
          <>
            <Header />
            <NoteSection />
          </>
        )}
      </NoteListProvider>
    </div>
  );
};

export default App;
