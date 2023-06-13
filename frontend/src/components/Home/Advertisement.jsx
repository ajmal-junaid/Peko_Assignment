import left from "../../assets/leftside.png";
import right from "../../assets/rightside.png";
const Advertisement = () => {
  return (
    <div className="h-67 w-full flex justify-around items-center bg-blue-900 h-16">
      <div className="flex items-center">
        <img src={left} alt="Image" className="w-8 h-8 mr-2" />
        <div className="flex flex-col text-white ml-2">
          <span className="text-base">Investor Relations</span>
          <span className="text-sm">Latest updates &gt;</span>
        </div>
      </div>
      <div className="flex items-center">
        <img src={right} alt="Image" className="w-8 h-8 mr-2" />
        <div className="flex flex-col text-white ml-2">
          <span className="text-base">Careers @ Paytm</span>
          <span className="text-sm">Join the revolution &gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
