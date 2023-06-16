import { useState } from "react";
import instance from "../../utils/axios";
import Toast from "../Modal/Toast";
import { useNavigate } from "react-router-dom";

function FormInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
 

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

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(email !== "");
  };
  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(name !== "");
  };
  const navigate = useNavigate()

  const handleSubmit = () => {
    instance
      .post("user-register", { name, email, password, mobile: mobileNumber })
      .then((res) => {
        Toast(res.data.message, 3000, "success");
        navigate("/login")
      })
      .catch((err) => {
        Toast(err.response.data.message, 3000, "warning");
        console.log(err.response);
      });
  };

  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-1/2">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                className="w-full border border-gray-100 rounded p-2 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                required
              />

              <label
                htmlFor="name"
                className={`${
                  !isNameFocused
                    ? "top-2 text-gray-300"
                    : "-top-5 text-light-blue text-xs"
                } left-2  transition-all duration-200 absolute text-sm pointer-events-none`}
              >
                Name
              </label>
            </div>

            <div className="relative mb-4">
              <input
                type="tel"
                id="mobile"
                className="w-full border border-gray-100 rounded p-2 focus:outline-none"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                onFocus={handleMobileFocus}
                onBlur={handleMobileBlur}
                required
              />

              <label
                htmlFor="mobile"
                className={`${
                  !isMobileFocused
                    ? "top-2 text-gray-300"
                    : "-top-5 text-light-blue text-xs"
                } left-2  transition-all duration-200 absolute text-sm pointer-events-none`}
              >
                Mobile Number
              </label>
            </div>

            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                className="w-full border border-gray-100 rounded p-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                required
              />

              <label
                htmlFor="email"
                className={`${
                  !isEmailFocused
                    ? "top-2 text-gray-300"
                    : "-top-5 text-light-blue text-xs"
                } left-2 text-gray-300 transition-all duration-200 absolute text-sm pointer-events-none`}
              >
                Email ID
              </label>
            </div>

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full border border-gray-100 rounded p-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                required
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

            <p className="text-sm text-gray-500">
              By creating this account, you agree to our{" "}
              <a className="text-light-blue">Terms & Conditions</a> &{" "}
              <a className="text-light-blue">Privacy Policy.</a>
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-light-blue font-bold text-white rounded py-2 px-4 mt-4 w-full"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
