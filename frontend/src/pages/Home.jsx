import Advertisement from "../components/Home/Advertisement";
import Banner from "../components/Home/Banner";
import MajorOptions from "../components/Home/MajorOptions";
import TopBar from "../components/Home/TopBar";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Advertisement/>
        <TopBar/>
        <Banner/>
        <MajorOptions/>
      </div>
    </>
  );
};

export default Home;
