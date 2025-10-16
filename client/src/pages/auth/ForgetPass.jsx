import React, { useState } from "react";
import UserNavbar from "../../components/user/common/UserNavbar";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const [tel, setTel] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleSent = (e) => {
    e.preventDefault();
    alert("Otp Sent to your Register Phone Number");
  };

  const handleOtp = (e) => {
    e.preventDefault();
    alert("otp verified successfully");
    navigate("/");
  };
  return (
    <div>
      <UserNavbar />
      <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-background">
      <form className="w-full max-w-md p-6  bg-secondary/40 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl overflow-y-auto">
        <h2 className="text-center mb-10 text-text-base text-2xl font-bold">
          Reset Your Password
        </h2>
        <input
  type="tel"
  placeholder="Enter Your Phone Number"
  value={tel}
  onChange={(e) => setTel(e.target.value)}
  required={true}
  className="w-full mb-2 rounded-lg border border-secondary/50 bg-secondary px-4 py-2 text-text-base placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
/>
        <div className="text-right text-sm">
          <button
            disabled={tel.length <= 0}
            className={`text-primary text-sm ${
              tel.length <= 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:underline"
            }`}
            onClick={handleSent}
          >
            Send Reset otp
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter Your otp"
          value={otp}
          maxLength={6}
          onChange={(e) => setOtp(e.target.value)}
          required={true}
          className="w-full mt-3 mb-2 rounded-lg border border-secondary/50 bg-secondary px-4 py-2 text-text-base placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <Button
          onClick={handleOtp}
          disabled={otp.length <= 0}
          className={`w-full mt-7 mb-2 bg-primary text-secondary ${
            otp.length < 6
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Verify otp
        </Button>
        <div className="text-right text-sm">
          <a href="/login" className="text-primary text-sm text-right">
            Back to Login
          </a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ForgetPass;
