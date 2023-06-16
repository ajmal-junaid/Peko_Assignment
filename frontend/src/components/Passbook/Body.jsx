import { useEffect, useState } from "react";
import addMoneyIcon from "../../assets/addMoney.png";
import Actions from "./Actions";
import AddMoney from "../Modal/AddMoney";
import PropTypes from "prop-types";
import Sended from "./Sended";
import Recieved from "./Recieved";
import instance from "../../utils/axios";
const Body = ({ socket, mobile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getBalance();
    getTransactions();
  }, []);
  const getBalance = () => {
    instance
      .get("get-wallet")
      .then((res) => {
        setBalance(res.data.data);
      })
      .catch((err) => {
        console.log(err.data.response.message, "get-wallet err");
      });
  };
  const getTransactions = () => {
    instance
      .get("get-transactions")
      .then((res) => {
        setTransactions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {isModalOpen && <AddMoney closeModal={closeModal} />}
      <div className="mt-4 sm:text-center">
        <div className="flex items-center ml-5 ">
          <h2 className="text-lg font-bold border-b-4 border-light-blue">
            Paytm Wallet
          </h2>
        </div>
        <div className="bg-gray-100 rounded p-4 mt-4">
          <div className="text-sm font-thin mb-1">Total Balance</div>
          <div className="text-3xl font-bold">Rs. {balance}.00</div>
          <div
            className="mt-5 flex items-center justify-center cursor-pointer"
            onClick={openModal}
          >
            <img src={addMoneyIcon} alt="Add" className="w-5 h-5 mr-1" />
            <a className="text-light-blue">Add Money</a>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="bg-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Statement</h2>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.707 3.293a1 1 0 0 1 0 1.414L6.414 9H17a1 1 0 0 1 0 2H6.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mr-2">Page 1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11H3a1 1 0 0 1 0-2h10.586L9.293 4.707a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4 max-h-96 overflow-auto">
          {transactions.length &&
            transactions.map((transaction, index) =>
              transaction.from == mobile ? (
                <div key={index}>
                  <Sended transaction={transaction}/>
                </div>
              ) : (
                <div key={index}>
                  <Recieved transaction={transaction}/>
                </div>
              )
            )}
        </div>
      </div>
      <Actions socket={socket} transactions={transactions} setTransactions={setTransactions} setBalance={setBalance}/>
    </>
  );
};
Body.propTypes = {
  socket: PropTypes.object,
  mobile: PropTypes.string,
};

export default Body;
