import React from "react";

const Header = () => {
  return (
    <div className="flex h-fit w-screen flex-col content-center justify-center p-2.5 outline-1 outline-black">
      <h1 className="text-center">Super Sticky Notes</h1>
      <label className="input">
        <input type="search" placeholder="Search" />
      </label>
      <button className="btn btn-primary">New Note</button>
      <div className="collapse-arrow bg-base-100 border-base-300 collapse border">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Filter by...</div>
        <div className="collapse-content text-sm">Inner filters</div>
      </div>
    </div>
  );
};

export default Header;
