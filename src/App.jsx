import React from "react";
import Header from "./Header/Header";
import NoteSection from "./Main/NoteSection";
import NoteListProvider from "./components/NoteListProvider";
const App = () => {
  // switch between components
  return (
    <div data-theme="dark" className="h-screen w-screen">
      <NoteListProvider>
        <Header />
        <div className="divider m-2"></div>
        <NoteSection />
      </NoteListProvider>
    </div>
  );
};

export default App;
