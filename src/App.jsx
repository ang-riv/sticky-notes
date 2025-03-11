import React from "react";
import Header from "./Header/Header";
import NoteSection from "./Main/NoteSection";
const App = () => {
  return (
    <div data-theme="light" className="h-screen w-screen">
      <Header />
      <NoteSection />
    </div>
  );
};

export default App;
