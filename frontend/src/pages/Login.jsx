// import Banner from "../components/Signup/Banner";
import Navbar from "../components/Login/Navbar";
import VerifyOtp from "../components/Login/VerifyOtp";
import LoginForm from "../components/Login/LoginForm";
const Login = () => {
  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      <LoginForm />
      <VerifyOtp />
    </>
  );
};

export default Login;
