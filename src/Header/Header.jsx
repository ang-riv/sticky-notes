import React from "react";

const Header = () => {
  return (
    <div className="flex h-fit w-screen flex-col content-center justify-center p-2.5 outline-1 outline-black">
      <h1 className="text-center">Super Sticky Notes</h1>
      <label className="input">
        <input type="search" placeholder="Search" />
      </label>
      <div className="dropdown dropdown-bottom dropdown-center flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          New Note
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 flex w-52 content-center justify-center p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
        </ul>
      </div>
      {/*TESTER DROPDOWN*/}
      <div className="dropdown dropdown-bottom dropdown-center flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <div
          tabIndex={0}
          className="dropdown-content bg-base-100 rounded-box z-1 flex w-50 content-center justify-center p-2 shadow-md"
        >
          <div className="flex content-center justify-between">
            <button className="btn bg- h-[40px] w-[40px] rounded-full"></button>
            <button className="btn bg- h-[40px] w-[40px] rounded-full"></button>
            <button className="btn bg- h-[40px] w-[40px] rounded-full"></button>
            <button className="btn bg- h-[40px] w-[40px] rounded-full"></button>
          </div>
        </div>
      </div>
      {/*OPTION 2 WITH MENU*/}
      <ul className="menu menu-md bg-base-200 rounded-box w-full">
        <li>
          <details>
            <summary className="text-base font-semibold">Filter by...</summary>
            <ul>
              <li>
                <details>
                  <summary>Date</summary>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm"
                        />
                        Newest to Oldest
                      </label>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Tag</summary>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm"
                        />
                        Newest to Oldest
                      </label>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default Header;
