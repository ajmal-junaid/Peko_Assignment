import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpg";
const ThirdPartyBanner = () => {
  const banners = [banner1, banner2];

  return (
    <div className="mt-10 w-85 mx-auto px-16 overflow-hidden my-10" >
      <div className="relative" >
        <div className="flex overflow-x-auto" >
          {banners.map((banner, index) => (
            <div key={index} className="w-10/12 flex-shrink-0 pr-10">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyBanner;
