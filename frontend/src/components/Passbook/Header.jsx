import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center p-4 border-b-2 drop-shadow-md">
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
        <h1 className="text-base font-semibold">Passbook </h1>
      </div>
      <div className="w-1/4 flex justify-start"></div>
    </div>
  );
};

export default Header;
