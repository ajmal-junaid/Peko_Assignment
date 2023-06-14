import Advertisement from "../components/Home/Advertisement";
import Banner from "../components/Home/Banner";
import MajorOptions from "../components/Home/MajorOptions";
import Options from "../components/Home/Options";
import TopBar from "../components/Home/TopBar";
import Navbar from "../components/Navbar/Navbar";
import firstrow4 from "../assets/firstrow1.png";
import firstrow1 from "../assets/firstrow2.png";
import firstrow3 from "../assets/firstrow3.png";
import firstrow2 from "../assets/firstrow4.png";
import secondrow1 from "../assets/secondrow1.png";
import secondrow4 from "../assets/secondrow4.png";
import secondrow3 from "../assets/secondrow3.png";
import secondrow2 from "../assets/secondrow2.png";
import thirdrow1 from "../assets/thirdrow1.png";
import thirdrow4 from "../assets/thirdrow3.png";
import thirdrow3 from "../assets/thirdrow4.png";
import thirdrow2 from "../assets/thirdrow2.png";
import List from "../components/Home/List";
import list1 from "../assets/list1.png";
import list2 from "../assets/list2.png";
import list3 from "../assets/list3.jpeg";
import list4 from "../assets/list4.png";
import FullWidthButton from "../components/Home/FullWidthButton";
import fourthrow1 from "../assets/fourthrow1.png";
import fourthrow2 from "../assets/fourthrow2.png";
import fourthrow3 from "../assets/fourthrow3.png";
import fourthrow4 from "../assets/fourthrow4.png";
import ThirdPartyBanner from "../components/Home/ThirdPartyBanner";
import list5 from '../assets/listbottom1.png';
import list6 from '../assets/listbottom2.png';
import list7 from '../assets/listbottom3.png';
import Footer from "../components/Footer/Footer";
const Home = () => {
  const titles = [
    "Recharge & Bill Payments",
    "Play & Win",
    "Tickets",
    "Also on Paytm",
  ];
  const titlesFirst = ["Mobile Prepaid", "Electricity", "DTH", "View All"];
  const titleSecond = ["Rummy", "Poker", "Win ₹10 Lakh", "Win ₹1.5 Crore"];
  const titleThird = [
    "Movie Tickets",
    "Train Tickets",
    "Flight Tickets",
    "Bus Tickets",
  ];
  const titleFouth = ["Train", "Buy Digital Gold", "Cricket", "Loans"];
  const listTitles = [
    "Scan any QR",
    "App only offers",
    "Safe and Secure",
    "Faster and Smoother",
    "Cashback & Offers",
    "Become a Merchant",
    "24x7 Customer care"
  ];
  const listSubTitles = [
    "Make payments at nearby shops",
    "View your personalized offers, scratchcards and points",
    "At Paytm your trust is foremost, your money is yours until you get what you paid for",
    "Make the most of the enriched in-app experience",
    "View your scratchcards, points & other offers",
    "Accept payments with Paytm's Payment Gateway, Payment Links, QR & much more",
    "Get quick resolution on queries related to Paytm"
  ];
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Advertisement />
        <TopBar />
        <Banner />
        <MajorOptions />
        <Options
          title={titles[0]}
          image1={firstrow1}
          title1={titlesFirst[0]}
          image2={firstrow2}
          title2={titlesFirst[1]}
          image3={firstrow3}
          title3={titlesFirst[2]}
          image4={firstrow4}
          title4={titlesFirst[3]}
        />
        <Options
          title={titles[1]}
          image1={secondrow1}
          title1={titleSecond[0]}
          image2={secondrow2}
          title2={titleSecond[1]}
          image3={secondrow3}
          title3={titleSecond[2]}
          image4={secondrow4}
          title4={titleSecond[3]}
        />
        <Options
          title={titles[2]}
          image1={thirdrow1}
          title1={titleThird[0]}
          image2={thirdrow2}
          title2={titleThird[1]}
          image3={thirdrow3}
          title3={titleThird[2]}
          image4={thirdrow4}
          title4={titleThird[3]}
          button={true}
        />
      </div>
      <div className="mt-10 max-w-150 mx-10 mb-4">
        <h2 className="font-bold tracking-wide">Download Paytm app</h2>
      </div>
      <List image={list1} title={listTitles[0]} subtitle={listSubTitles[0]} />
      <List image={list2} title={listTitles[1]} subtitle={listSubTitles[1]} />
      <List image={list3} title={listTitles[2]} subtitle={listSubTitles[2]} />
      <List image={list4} title={listTitles[3]} subtitle={listSubTitles[3]} />
      <FullWidthButton />
      <Options
        title={titles[3]}
        image1={fourthrow2}
        title1={titleFouth[0]}
        image2={fourthrow3}
        title2={titleFouth[1]}
        image3={fourthrow4}
        title3={titleFouth[2]}
        image4={fourthrow1}
        title4={titleFouth[3]}
        button={true}
      />
      <ThirdPartyBanner/>
     <div className="m-5 mb-20">
     <List image={list5} title={listTitles[4]} subtitle={listSubTitles[4]} />
      <List image={list6} title={listTitles[5]} subtitle={listSubTitles[5]} />
      <List image={list7} title={listTitles[6]} subtitle={listSubTitles[6]} />
     </div>
     <Footer/>
    </>
  );
};

export default Home;
