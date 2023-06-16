import PropTypes from "prop-types";
const Sended = ({transaction}) => {
  return <div className="bg-white p-4 flex items-center">
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
    <p className="font-semibold">To {transaction.receiverMobile}</p>
    <p className="text-gray-500">{transaction.createdAt.slice(0,10)} - {transaction.timestamp}</p>
  </div>
  <p className="ml-auto font-semibold text-red-500">- Rs. {transaction.amount}.00</p>
</div>;
};
Sended.propTypes = {
  transaction: PropTypes.object,
};

export default Sended;
