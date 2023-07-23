import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleExclamation,
  faArrowsRotate,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CreateForm from "./createform";
const SecondBar = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-6 px-6">
        <div className="flex items-center">
          <span className="text-black text-4xl" id="bigT">
            Dashboard
          </span>
        </div>

        <div className="flex items-center">
          {/* <FontAwesomeIcon
            icon={faArrowsRotate}
            className="px-4 text-lg text-first cursor-pointer"
            onClick={refreshcodes}
          /> */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 rounded-lg border border-first  outline-none"
            />
            <a className="absolute text-center border-l inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-first" />
            </a>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-second w-24 text-white py-2 px-4 rounded-lg ml-4"
          >
            Create
          </button>
        </div>
      </nav>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Form Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="flex">
          
        </div>
      </Modal> */}

      {showCreateModal ? (
        <>
          <div className="justify-center items-center w-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h1 className="text-first" id="bigT">
                    Promo Code Creation
                  </h1>
                  <button
                    className="p-1 ml-auto border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowCreateModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-8 ">
                  <CreateForm />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default SecondBar;
