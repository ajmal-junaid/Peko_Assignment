import PropTypes from "prop-types";
import { useState } from "react";
import secureIcon from "../../assets/secureIcon.svg";
import instance from "../../utils/axios";
import showToast from "../Modal/Toast";
import { useNavigate } from "react-router-dom";

const VerifyOtp = ({ email, image }) => {
  const [otp, setOtp] = useState("");
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const navigate = useNavigate()

  const handleMobileFocus = () => {
    setIsMobileFocused(true);
  };

  const handleMobileBlur = () => {
    setIsMobileFocused(otp !== "");
  };

  const handleVerify = () => {
    instance
      .post("verify-login", { email, otp })
      .then((res) => {
        showToast(res.data.message, 3000, "success");
        navigate('/')
      })
      .catch((err) => {
        showToast(err.response.data.message, 3000, "warning");
      });
  };

  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-1/2">
          <p className="text-lg font-bold text-center">
            Enter One Time Password(OTP)/TOTP
          </p>
          <p className="text-xs text-gray-500 text-center mt-3">
            One Time Password (OTP) has been sent to your email {email}, please
            enter the same here to login.
          </p>
          <div className="p-4">
            <div className="justify-center flex">
              <img src={image} />{" "}
            </div>
            <div className="relative mb-4">
              <input
                type="tel"
                className="w-full border border-gray-100 rounded p-2 focus:outline-none"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                onFocus={handleMobileFocus}
                onBlur={handleMobileBlur}
              />

              <label
                htmlFor="mobile"
                className={`${
                  !isMobileFocused
                    ? "top-2 text-gray-300"
                    : "-top-5 text-light-blue text-xs"
                } left-2  transition-all duration-200 absolute text-sm pointer-events-none`}
              >
                OTP / TOTP
              </label>
            </div>
          </div>
          <div className="flex flex-grow items-center justify-center">
            <button
              onClick={handleVerify}
              className="bg-light-blue text-white py-2 px-4 w-full text-sm rounded-lg flex items-center justify-center"
            >
              <img
                src={secureIcon}
                alt="Secure Icon"
                className="h-4 w-4 mr-1"
              />
              <span className="font-semibold text-lg">Login Securely</span>
            </button>
          </div>
        </div>
        <a className="text-light-blue text-sm mt-3 cursor-pointer">
          Know more about 2 Step Authentication
        </a>
      </div>
    </div>
  );
};
VerifyOtp.propTypes = {
  email: PropTypes.string.isRequired,
  image: PropTypes.string,
};
export default VerifyOtp;
