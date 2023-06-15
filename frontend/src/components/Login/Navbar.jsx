import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/paytm-logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center p-4">
      <div className="w-1/4">
        <div onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-xl font-bold">Login to </h1>
        <img src={headerLogo} alt="Image" className="ml-2 h-6 w-auto" />
      </div>
      <div className="w-1/4 flex justify-start">
        <a
          className="font-bold text-light-blue cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
