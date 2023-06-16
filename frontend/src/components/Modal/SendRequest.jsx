import { useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import showToast from "./Toast";

function Modal({ closeModal, IsReq, socket }) {
  const token = Cookies.get("token");
  const [id, setId] = useState(jwt_decode(token).mobile);
  const [receiverMobile, setReceiverMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id);
    setShowConfirmation(true);
  };

  const handleConfirm = async () => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const transaction = {
      from: id,
      receiverMobile,
      amount,
      description,
      timestamp,
    };
    await socket.emit("send_money", transaction, (acknowledgement) => {
      if (acknowledgement.success) {
        closeModal();
        showToast(acknowledgement.message, 4000, "success");
      } else {
        closeModal();
        showToast(acknowledgement.message, 4000, "failure");
      }
    });
  };
  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold mb-4">
          {!IsReq ? "Send Money" : "Request Money"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="receiverMobile" className="block font-medium mb-2">
              {IsReq ? "Payee" : "Receiver Mobile"}
            </label>
            <input
              type="text"
              id="receiverMobile"
              className="w-full border border-gray-300 rounded-md p-2"
              value={receiverMobile}
              onChange={(e) => setReceiverMobile(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium mb-2">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="w-full border border-gray-300 rounded-md p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-300 rounded-md p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-4">
            {showConfirmation ? (
              <div>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 mr-2"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mr-2"
              >
                Send
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
Modal.propTypes = {
  closeModal: PropTypes.func,
  IsReq: PropTypes.bool,
  socket: PropTypes.object,
};
export default Modal;
