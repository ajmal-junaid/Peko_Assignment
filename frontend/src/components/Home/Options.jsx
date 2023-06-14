import PropTypes from "prop-types";
import ShowMoreButton from "./ShowMoreButton";
const Options = ({
  title,
  image1,
  title1,
  image2,
  title2,
  image3,
  title3,
  image4,
  title4,
  button,
}) => {
  return (
    <div
      className={`mt-10 max-w-150 mx-10 ${
        button ? "" : "border-b border-gray-300"
      }`}
    >
      <h2 className="font-extrabold">{title}</h2>
      <div className="flex flex-wrap items-start justify-between py-4">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <img src={image1} alt="Image 1" className="max-w-full h-16 mx-auto" />
          <p className="mt-2 text-center font-medium">{title1}</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <img src={image2} alt="Image 2" className="max-w-full h-16 mx-auto" />
          <p className="mt-2 text-center font-medium">{title2}</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <img src={image3} alt="Image 3" className="max-w-full h-16 mx-auto" />
          <p className="mt-2 text-center font-medium">{title3}</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <img src={image4} alt="Image 4" className="max-w-full h-16 mx-auto" />
          <p className="mt-2 text-center font-medium">{title4}</p>
        </div>
      </div>
      {button && <ShowMoreButton />}
    </div>
  );
};

Options.propTypes = {
  title: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  image3: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  image4: PropTypes.string.isRequired,
  title4: PropTypes.string.isRequired,
  button: PropTypes.bool,
};

export default Options;
