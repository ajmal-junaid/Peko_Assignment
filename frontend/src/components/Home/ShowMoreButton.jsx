const ShowMoreButton = () => {
  return (
    <div className="flex justify-center">
      <button className="font-bold text-xs text-light-blue border border-gray-300 rounded-full px-4 py-2 flex items-center">
        All Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};

export default ShowMoreButton;
