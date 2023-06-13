import Advertisement from "../components/Home/Advertisement";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Advertisement/>
      </div>
    </>
  );
};

export default Home;
