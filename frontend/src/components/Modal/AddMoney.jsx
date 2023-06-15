import { useState } from "react";
import PropTypes from "prop-types";

function Modal({ closeModal }) {
  const [amount, setAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    // Handle form submission here
    // You can access the values of receiverMobile, amount, and description
  };

  const handleConfirm = () => {
    // Perform the actual action here
    // You can access the values of receiverMobile, amount, and description
    // Close the modal
    closeModal();
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
        <h2 className="text-lg font-semibold mb-4">Add Money</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium mb-2">
              Amount to be added
            </label>
            <input
              type="text"
              id="amount"
              className="w-full border border-gray-300 rounded-md p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
                Add
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
};
export default Modal;
