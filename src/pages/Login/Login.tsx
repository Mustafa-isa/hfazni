import React, { useState } from "react";
import bg from "../../assets/images/bg.png"; 
import apiClient from "../../api/client"; 
import Swal from "sweetalert2"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/api/Account/login", {
        email,
        password,
      });
      console.log("Login successful", response.data);

      // Show SweetAlert for successful login
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: response.data.message,
      });
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("userToken", response.data.data.token); 
      window.location.href = "/";
    } catch (error) {
      console.error("Login error", error);

      // Show SweetAlert for error
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");

      // Show SweetAlert for password mismatch
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "The passwords do not match. Please check and try again.",
      });
      return;
    }
    try {
      const response = await apiClient.post("/api/Account/Register", {
        UserName: userName,
        email,
        password,
        confirmPassword,
      });
      console.log("Registration successful", response.data);

      // Show SweetAlert for successful registration
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: response.data.data.message,
      });
    } catch (error) {
      console.error("Registration error", error);

      // Show SweetAlert for error
      Swal.fire({
        icon: "error",
        title: "Registration Error",
        text:
          error?.response?.data || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div
      className="h-screen p-4 w-full flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-80 m-4 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "اهلا بك مجددا" : "انشاء حساب جديد"}
        </h2>
        {/* <button className="w-full p-3 bg-gray-900 mb-6 relative text-lg font-medium text-white rounded-md flex items-center justify-center hover:bg-gray-700 transition duration-200">
          تسجيل الدخول بواسطه جوجل
          <div className="absolute left-0 w-12 flex items-center justify-center text-blue-600 bg-white top-0 bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 120 120"
            >
              <path
                d="M107.145,55H100H87.569H60v18h27.569c-1.852,5.677-5.408,10.585-10.063,14.118 C72.642,90.809,66.578,93,60,93c-12.574,0-23.278-8.002-27.299-19.191C31.6,70.745,31,67.443,31,64 c0-3.839,0.746-7.505,2.101-10.858C37.399,42.505,47.823,35,60,35c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,20.969,72.736,16,60,16c-18.422,0-34.419,10.377-42.466,25.605C14,48.291,12,55.912,12,64c0,7.882,1.9,15.32,5.267,21.882 C25.223,101.389,41.372,112,60,112c12.382,0,23.668-4.688,32.182-12.386C101.896,90.831,108,78.128,108,64 C108,60.922,107.699,57.917,107.145,55z"
                opacity=".35"
              ></path>
              <path
                fill="#44bf00"
                d="M17.267,81.882C25.223,97.389,41.372,108,60,108c12.382,0,23.668-4.688,32.182-12.386L77.506,83.118 C72.642,86.809,66.577,89,60,89c-12.574,0-23.278-8.002-27.299-19.191L17.267,81.882z"
              ></path>
              <path
                d="M77.506,83.118c-0.684,0.553-1.685,1.158-2.398,1.638l14.711,12.846 c0.807-0.641,1.6-1.298,2.363-1.988L77.506,83.118z"
                opacity=".35"
              ></path>
              <path
                fill="#0075ff"
                d="M92.182,95.614C101.896,86.83,108,74.128,108,60c0-3.078-0.301-6.083-0.855-9H100H87.569H60v18 h27.569c-1.852,5.677-5.408,10.585-10.063,14.118L92.182,95.614z"
              ></path>
              <path
                d="M32.701,69.809L17.267,81.882c0.486,0.948,1.004,1.877,1.551,2.787l15.3-11.576 C33.63,72.181,33.05,70.804,32.701,69.809z"
                opacity=".35"
              ></path>
              <path
                fill="#ffc400"
                d="M17.267,81.882C13.9,75.32,12,67.882,12,60c0-8.088,2-15.709,5.534-22.395l15.568,11.537 C31.746,52.496,31,56.161,31,60c0,3.443,0.6,6.745,1.701,9.809L17.267,81.882z"
              ></path>
              <path
                d="M17.534,37.605c-0.482,0.844-1.169,2.36-1.564,3.251l16.059,11.491 c0.299-1.095,0.653-2.167,1.072-3.205L17.534,37.605z"
                opacity=".35"
              ></path>
              <path
                fill="#ff1200"
                d="M33.101,49.142C37.399,38.505,47.823,31,60,31c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,16.969,72.736,12,60,12c-18.422,0-34.419,10.377-42.466,25.605L33.101,49.142z"
              ></path>
            </svg>
          </div>
        </button> */}
        <span className="flex items-center justify-center mb-6 w-full text-slate-600 text-lg font-medium">
          أو
        </span>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                اسم المستخدم
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="اسم المستخدم"
                className="w-full p-3 bg-slate-100 focus:outline-none focus:border-gray-400 border border-gray-300 rounded-md"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              className="w-full p-3 bg-slate-100 focus:outline-none focus:border-gray-400 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور"
                className="w-full p-3 bg-slate-100 focus:outline-none focus:border-gray-400 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-0 left-0 text-gray-500 p-3"
              >
                {showPassword ? "إخفاء" : "عرض"}
              </button>
            </div>
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="تأكيد كلمة المرور"
                  className="w-full p-3 bg-slate-100 focus:outline-none focus:border-gray-400 border border-gray-300 rounded-md"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-0 left-0 text-gray-500 p-3"
                >
                  {showConfirmPassword ? "إخفاء" : "عرض"}
                </button>
              </div>
            </div>
          )}
          <div className="mb-4 flex gap-2 items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={stayLoggedIn}
              onChange={(e) => setStayLoggedIn(e.target.checked)}
            />
            <label className="text-sm text-gray-600">ابقَ مسجلاً للدخول</label>
          </div>
          <button
            type="submit"
            className="w-full p-3 my-7 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200"
          >
            {isLogin ? "تسجيل الدخول الان" : "انشاء حساب"}
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="cursor-pointer font-medium text-gray-800 text-sm text"
          >
            {isLogin
              ? "ليس لديك حساب؟ انشئ حساب"
              : "هل لديك حساب؟ تسجيل الدخول"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
