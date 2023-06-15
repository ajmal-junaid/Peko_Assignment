import { useState } from "react";
import secureIcon from "../../assets/secureIcon.svg";
const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [isMobileFocused, setIsMobileFocused] = useState(false);

  const handleMobileFocus = () => {
    setIsMobileFocused(true);
  };

  const handleMobileBlur = () => {
    setIsMobileFocused(otp !== "");
  };

  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-1/2">
          <p className="text-lg font-bold text-center">
            Enter One Time Password(OTP)/TOTP
          </p>
          <p className="text-xs text-gray-500 text-center mt-3">
            One Time Password (OTP) has been sent to your email ******6698,
            please enter the same here to login.
          </p>
          <div className="p-4">
            <div className="justify-center flex">
              <img src="data:image/png;base64,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" />
            </div>
            <div className="relative mb-4">
              <input
                type="tel"
                id="mobile"
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
            <button className="bg-light-blue text-white py-2 px-4 w-full text-sm rounded-lg flex items-center justify-center">
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

export default VerifyOtp;
