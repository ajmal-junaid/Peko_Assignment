import addMoneyIcon from "../../assets/addMoney.png";
const Body = () => {
  return (
    <>
      <div className="mt-4 sm:text-center">
        <div className="flex items-center ml-5 ">
          <h2 className="text-lg font-bold border-b-4 border-light-blue">
            Paytm Wallet
          </h2>
        </div>
        <div className="bg-gray-100 rounded p-4 mt-4">
          <div className="text-sm font-thin mb-1">Total Balance</div>
          <div className="text-3xl font-bold">Rs. 0.00</div>
          <div className="mt-5 flex items-center justify-center cursor-pointer">
            <img src={addMoneyIcon} alt="Add" className="w-5 h-5 mr-1" />
            <a className="text-light-blue">Add Money</a>
          </div>
        </div>
      </div>
      {/* <div className="mx-8 my-4">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">Statement</h2>
        </div>
        <div className="mt-4">
          <div className="bg-white p-4 flex items-center">
            <svg
              className="w-6 h-6 mr-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM3.72 6.7a1 1 0 10-1.44 1.4l5 5a1 1 0 001.44 0l5-5a1 1 0 10-1.44-1.4L10 11.58l-4.28-4.3z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold">Transaction Name</p>
              <p className="text-gray-500">June 15, 2023 - 10:30 AM</p>
            </div>
            <p className="ml-auto font-semibold">Rs. 273.00</p>
          </div>
        </div>
      </div> */}
      <div className="my-4">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">Statement</h2>
        </div>
        <div className="mt-4">
          <div className="bg-white p-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-4 text-yellow-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="8" x2="16" y2="16"></line>
              <line x1="8" y1="16" x2="16" y2="8"></line>
            </svg>
            <div>
              <p className="font-semibold">Transaction Name 1</p>
              <p className="text-gray-500">June 15, 2023 - 10:30 AM</p>
            </div>
            <p className="ml-auto font-semibold text-green-500">+ Rs. 273.00</p>
          </div>
          
          <div className="bg-white p-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="16 12 12 8 8 12"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>

            <div>
              <p className="font-semibold">Transaction Name 1</p>
              <p className="text-gray-500">June 15, 2023 - 10:30 AM</p>
            </div>
            <p className="ml-auto font-semibold text-green-500">+ Rs. 273.00</p>
          </div>

          <div className="bg-white p-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-4 text-red-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>

            <div>
              <p className="font-semibold">Transaction Name 2</p>
              <p className="text-gray-500">June 14, 2023 - 3:45 PM</p>
            </div>
            <p className="ml-auto font-semibold text-red-500">- Rs. 520.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
