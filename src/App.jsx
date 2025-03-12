import React from "react";
import Header from "./Header/Header";
import NoteSection from "./Main/NoteSection";
import NoteListProvider from "./components/NoteListProvider";
const App = () => {
  return (
    <div data-theme="light" className="h-screen w-screen">
      <NoteListProvider>
        <Header />
        <NoteSection />
      </NoteListProvider>
    </div>
  );
};

export default App;
