import { useState } from "react";
import Banner from "../Signup/Banner";
import secureIcon from "../../assets/secureIcon.svg";
import instance from "../../utils/axios";
import showToast from "../Modal/Toast";
import VerifyOtp from "./VerifyOtp";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [qr, setQr] = useState("");
  const [otpSend, setOtpSend] = useState(false);

  const handleMobileFocus = () => {
    setIsMobileFocused(true);
  };

  const handleMobileBlur = () => {
    setIsMobileFocused(mobileNumber !== "");
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(password !== "");
  };

  const handleSendOtp = () => {
    instance
      .post("user-login", { email: mobileNumber, password, qr })
      .then((res) => {
        setQr(res.data.data);
        setOtpSend(true);
        showToast(res.data.message, 3000, "success");
      })
      .catch((err) => {
        showToast(err.response.data.message, 3000, "warning");
      });
  };

  return (
    <>
      <Banner />
      {!otpSend ? (
        <div className="flex flex-col mt-10">
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="w-1/2">
              <div className="p-4">
                <div className="relative mb-4">
                  <input
                    type="tel"
                    className="w-full border border-gray-100 rounded p-2 focus:outline-none"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
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
                    E-mail
                  </label>
                </div>

                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border border-gray-100 rounded p-2 focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                  />

                  <label
                    htmlFor="password"
                    className={`${
                      !isPasswordFocused
                        ? "top-2 text-gray-300"
                        : "-top-5 text-light-blue text-xs"
                    } left-2 text-gray-300 transition-all duration-200 absolute text-sm pointer-events-none`}
                  >
                    Password
                  </label>

                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <span className="text-light-blue">Hide</span>
                    ) : (
                      <span className="text-light-blue">Show</span>
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500">
                  IMPORTANT! To protect your password and account, ensure you
                  have not shared your screen with others. Paytm never asks to
                  share screen
                </p>
              </div>
              <div className="flex flex-grow items-center justify-center">
                <button
                  onClick={handleSendOtp}
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
            <p className="text-sm text-gray-500 mt-5">
              By creating this account, you agree to our{" "}
              <a className="text-light-blue">Terms & Conditions</a> &{" "}
              <a className="text-light-blue">Privacy Policy.</a>
            </p>
          </div>
        </div>
      ) : (
        <VerifyOtp image={qr} email={mobileNumber} />
      )}
    </>
  );
}

export default LoginForm;
