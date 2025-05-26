
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<"welcome" | "signup" | "signin" | "otp">("welcome");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [otpTimer, setOtpTimer] = useState(56);

  const handleSendOTP = () => {
    setCurrentView("otp");
  };

  const handleVerifyOTP = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex">
      {/* Left Side - Form */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-2xl font-bold text-white italic mb-12">
            Car Wash
          </div>

          {/* Welcome View */}
          {currentView === "welcome" && (
            <div>
              <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
              <p className="text-xl text-gray-300 mb-8">Welcome to Car wash.</p>
              <p className="text-lg mb-8">Please enter your details.</p>
              
              <Input 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 mb-6"
              />
              
              <Button 
                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold mb-8"
                onClick={() => setCurrentView("signup")}
              >
                DONE
              </Button>
            </div>
          )}

          {/* Sign Up View */}
          {currentView === "signup" && (
            <div>
              <h1 className="text-5xl font-bold mb-4">Sign Up</h1>
              <p className="text-lg text-gray-300 mb-8">Enter your credentials below.</p>
              <p className="text-lg mb-8">Enter your mobile number</p>
              
              <Input 
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 mb-6"
              />
              
              <Button 
                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold mb-6"
                onClick={handleSendOTP}
              >
                SEND
              </Button>
              
              <p className="text-center">
                Already have an account?{" "}
                <button 
                  className="text-green-400 hover:underline"
                  onClick={() => setCurrentView("signin")}
                >
                  Login
                </button>
              </p>
            </div>
          )}

          {/* Sign In View */}
          {currentView === "signin" && (
            <div>
              <h1 className="text-5xl font-bold mb-4">Sign In</h1>
              <p className="text-lg text-gray-300 mb-8">Enter your credentials below.</p>
              <p className="text-lg mb-8">Enter your mobile number</p>
              
              <Input 
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 mb-6"
              />
              
              <Button 
                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold mb-6"
                onClick={handleSendOTP}
              >
                SEND
              </Button>
              
              <p className="text-center">
                Don't have an account?{" "}
                <button 
                  className="text-green-400 hover:underline"
                  onClick={() => setCurrentView("signup")}
                >
                  Sign Up
                </button>
              </p>
            </div>
          )}

          {/* OTP Verification */}
          {currentView === "otp" && (
            <div>
              <h1 className="text-5xl font-bold mb-4">Sign In</h1>
              <p className="text-lg text-gray-300 mb-8">Enter your credentials below.</p>
              <p className="text-lg mb-8">Enter your mobile number</p>
              
              <div className="flex space-x-3 mb-6">
                <InputOTP value={otpValue} onChange={setOtpValue} maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-12 h-12 bg-transparent border-gray-600 text-white text-center" />
                    <InputOTPSlot index={1} className="w-12 h-12 bg-transparent border-gray-600 text-white text-center" />
                    <InputOTPSlot index={2} className="w-12 h-12 bg-transparent border-gray-600 text-white text-center" />
                    <InputOTPSlot index={3} className="w-12 h-12 bg-transparent border-gray-600 text-white text-center" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <button className="text-green-400 hover:underline">Resend OTP</button>
                <span className="text-red-400">00:{otpTimer.toString().padStart(2, '0')}</span>
              </div>
              
              <Button 
                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold"
                onClick={handleVerifyOTP}
              >
                SIGN IN
              </Button>
            </div>
          )}

          {/* Footer */}
          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Copyright © 2020 <span className="text-green-400">Car Wash</span> All rights reserved.</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div 
        className="w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80')"
        }}
      >
        {/* Social Icons */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-4">
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
              <span className="text-lg">𝕏</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
              <span className="text-lg">f</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
              <span className="text-lg">📷</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
              <span className="text-lg">in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
