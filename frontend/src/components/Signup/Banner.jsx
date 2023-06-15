import leftImage from "../../assets/paytm_icon.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-blue-200 p-2 flex flex-col sm:flex-row justify-between items-center rounded-lg">
        <div className="mb-2 sm:mb-0">
          <img src={leftImage} alt="Image" className="mr-2 h-7 w-7" />
        </div>
        <div className="mb-2 sm:mb-0 text-center sm:text-left">
          <p className="text-xs text-gray-700">Paytm App provides a seamless experience, upgraded security, access to multiple services, and more benefits.</p>
        </div>
        <div>
          <button className="bg-light-blue text-white py-1 px-2 ml-auto text-xs rounded-lg">
            Get App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
