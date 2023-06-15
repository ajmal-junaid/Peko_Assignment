import { useState } from "react";
import Modal from "../Modal/SendRequest";

const Actions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenReq, setIsModalOpenReq] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalReq = () => {
    setIsModalOpenReq(true);
  };

  const closeModalReq = () => {
    setIsModalOpenReq(false);
  };
  return (
    <>
      {isModalOpen && <Modal closeModal={closeModal} IsReq={false} />}
      {isModalOpenReq && <Modal closeModal={closeModalReq} IsReq={true} />}
      <div className="fixed bottom-4 left-4">
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center p-4 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className="ml-2">Send Money</span>
        </button>
      </div>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={openModalReq}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center p-4 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="ml-2">Send Request</span>
        </button>
      </div>
    </>
  );
};

export default Actions;
