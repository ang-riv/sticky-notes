import React from "react";

const Modal = ({ deleteDetails }) => {
  // if they confirm delete, find the specific note, remove from the arr
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn h-8 w-8 self-start rounded-xl"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        X
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-xl font-bold">Wait!!</h3>
          <p className="py-4">
            Are you sure you want to{" "}
            <span className="text-red-700 underline">delete</span> your sticky
            note? All your info will be lost! You'll forget everything!!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn font-md mr-2 rounded-xl">Cancel</button>
              <button className="btn font-base rounded-xl bg-red-700 text-white">
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
