import image from "../../assets/Banner.svg";

const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-blue-200 to-white">
      <div className="bg-light-blue-200">
        <img src={image} alt="image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Banner;
