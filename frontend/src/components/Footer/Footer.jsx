import logo from "../../assets/Logofooter.png";
const Footer = () => {
  return (
    <div className="flex items-center bg-blue-50 fixed bottom-0 left-0 right-0 z-10 h-14 md:h-16 md:px-10 md:py-2">
      <div className="flex items-center w-1/2 px-4 md:px-10 py-2">
        <img src={logo} alt="Image" className="h-8 w-8 md:h-10 md:w-10" />
        <div className="ml-2 md:ml-4">
          <h2 className="text-gray-600 font-extrabold text-sm md:text-base">
            Download the App
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">
            Live the Paytm Experience
          </p>
        </div>
      </div>
      <div className="flex justify-end w-1/2 px-2 md:px-5">
        <button className="bg-blue-500 text-white rounded-full py-2 px-3 md:px-4 text-xs md:text-sm">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Footer;
