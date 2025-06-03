
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
  //   <div className="min-h-screen bg-black text-white relative flex flex-col lg:flex-row">
  //     {/* Left Side - Form */}
  //     <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10">
  //       <div className="w-full max-w-md">
  //         {/* Logo */}
  //         <div className="text-xl md:text-2xl font-bold text-white italic mb-8 md:mb-12">
  //           <div className=""></div>
  //           Car Wash
  //         </div>

  //         {/* Welcome View */}
  //         {currentView === "welcome" && (
  //           <div>
  //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Welcome!</h1>
  //             <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">Welcome to Car wash.</p>
  //             <p className="text-base md:text-lg mb-6 md:mb-8">Please enter your details.</p>
              
  //             <Input 
  //               placeholder="Name"
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //               className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 mb-6 h-12 text-base"
  //             />
              
  //             <Button 
  //               className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold mb-8 h-12 text-base"
  //               onClick={() => setCurrentView("signup")}
  //             >
  //               DONE
  //             </Button>
  //           </div>
  //         )}

  //         {/* Sign Up View */}
  //         {currentView === "signup" && (
  //           <div>
  //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Sign Up</h1>
  //             <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">Enter your credentials below.</p>
  //             <p className="text-base md:text-lg mb-6 md:mb-8">Enter your mobile number</p>
              
  //             <Input 
  //               placeholder="Mobile number"
  //               value={phone}
  //               onChange={(e) => setPhone(e.target.value)}
  //               className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 mb-6 h-12 text-base"
  //             />
              
  //             <Button 
  //               className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold mb-6 h-12 text-base"
  //               onClick={handleSendOTP}
  //             >
  //               SEND
  //             </Button>
              
  //             <p className="text-center text-sm md:text-base">
  //               Already have an account?{" "}
  //               <button 
  //                 className="text-green-400 hover:underline"
  //                 onClick={() => setCurrentView("signin")}
  //               >
  //                 Login
  //               </button>
  //             </p>
  //           </div>
  //         )}

  //         {/* Sign In View */}
  //         {currentView === "signin" && (
  //           <div>
  //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Sign In</h1>
  //             <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">Enter your credentials below.</p>
  //             <p className="text-base md:text-lg mb-6 md:mb-8">Enter your mobile number</p>
              
  //             <Input 
  //               placeholder="Mobile number"
  //               value={phone}
  //               onChange={(e) => setPhone(e.target.value)}
  //               className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 mb-6 h-12 text-base"
  //             />
              
  //             <Button 
  //               className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold mb-6 h-12 text-base"
  //               onClick={handleSendOTP}
  //             >
  //               SEND
  //             </Button>
              
  //             <p className="text-center text-sm md:text-base">
  //               Don't have an account?{" "}
  //               <button 
  //                 className="text-green-400 hover:underline"
  //                 onClick={() => setCurrentView("signup")}
  //               >
  //                 Sign Up
  //               </button>
  //             </p>
  //           </div>
  //         )}

  //         {/* OTP Verification */}
  //         {currentView === "otp" && (
  //           <div>
  //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Sign In</h1>
  //             <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">Enter your credentials below.</p>
  //             <p className="text-base md:text-lg mb-6 md:mb-8">Enter your mobile number</p>
              
  //             <div className="flex justify-center mb-6">
  //               <InputOTP value={otpValue} onChange={setOtpValue} maxLength={4}>
  //                 <InputOTPGroup>
  //                   <InputOTPSlot index={0} className="w-10 h-10 md:w-12 md:h-12 bg-transparent border-gray-600 text-white text-center" />
  //                   <InputOTPSlot index={1} className="w-10 h-10 md:w-12 md:h-12 bg-transparent border-gray-600 text-white text-center" />
  //                   <InputOTPSlot index={2} className="w-10 h-10 md:w-12 md:h-12 bg-transparent border-gray-600 text-white text-center" />
  //                   <InputOTPSlot index={3} className="w-10 h-10 md:w-12 md:h-12 bg-transparent border-gray-600 text-white text-center" />
  //                 </InputOTPGroup>
  //               </InputOTP>
  //             </div>
              
  //             <div className="flex items-center justify-between mb-6 text-sm md:text-base">
  //               <button className="text-green-400 hover:underline">Resend OTP</button>
  //               <span className="text-red-400">00:{otpTimer.toString().padStart(2, '0')}</span>
  //             </div>
              
  //             <Button 
  //               className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold h-12 text-base"
  //               onClick={handleVerifyOTP}
  //             >
  //               SIGN IN
  //             </Button>
  //           </div>
  //         )}
  //       </div>
  //     </div>

  //     {/* Right Side - Image */}
  //     <div 
  //       className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen bg-cover bg-center relative order-first lg:order-last"
  //       style={{
  //         backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80')"
  //       }}
  //     >
  //       {/* Social Icons */}
  //       <div className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2">
  //         <div className="flex flex-col space-y-3 md:space-y-4">
  //           <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
  //             <span className="text-base md:text-lg">𝕏</span>
  //           </a>
  //           <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
  //             <span className="text-base md:text-lg">f</span>
  //           </a>
  //           <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
  //             <span className="text-base md:text-lg">📷</span>
  //           </a>
  //           <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all">
  //             <span className="text-base md:text-lg">in</span>
  //           </a>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Footer - Mobile Only */}
  //     <div className="lg:hidden absolute bottom-4 left-4 right-4">
  //       <div className="flex flex-col space-y-2 text-xs text-gray-400 text-center">
  //         <span>Copyright © 2020 <span className="text-green-400">Car Wash</span> All rights reserved.</span>
  //         <span>Terms & Conditions</span>
  //       </div>
  //     </div>

  //     {/* Footer - Desktop */}
  //     <div className="hidden lg:block absolute bottom-12 left-12 right-12">
  //       <div className="flex justify-between text-sm text-gray-400">
  //         <span>Copyright © 2020 <span className="text-green-400">Car Wash</span> All rights reserved.</span>
  //         <span>Terms & Conditions</span>
  //       </div>
  //     </div>
  //   </div>
  <div className="min-h-screen flex flex-col lg:flex-row relative text-white bg-gradient-to-br from-black via-gray-900 to-black">
  {/* Left - Auth Card */}
  <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-6 md:p-12 relative z-10">

    <Card className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl">
      <CardContent className="p-8">
        {/* Brand Logo */}
        <div className="text-2xl font-bold italic text-green-400 mb-8">Car Wash</div>

        {/* View Management */}
        {currentView === "welcome" && (
          <>
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome!</h1>
            <p className="text-gray-300 mb-6">Welcome to Car Wash. Please enter your details.</p>

            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-6 h-12 bg-white/10 text-white placeholder:text-gray-400 rounded-md"
            />

            <Button className="w-full h-12 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-md"
              onClick={() => setCurrentView("signup")}
            >
              Continue
            </Button>
          </>
        )}

        {currentView === "signup" && (
          <>
            <h1 className="text-4xl font-bold mb-4 text-white">Sign Up</h1>
            <p className="text-gray-300 mb-6">Enter your mobile number</p>

            <Input
              placeholder="Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-6 h-12 bg-white/10 text-white placeholder:text-gray-400 rounded-md"
            />

            <Button className="w-full h-12 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-md"
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>

            <p className="text-sm text-center mt-4 text-gray-400">
              Already have an account?{" "}
              <button className="text-green-400 hover:underline" onClick={() => setCurrentView("signin")}>
                Login
              </button>
            </p>
          </>
        )}

        {currentView === "signin" && (
          <>
            <h1 className="text-4xl font-bold mb-4 text-white">Sign In</h1>
            <p className="text-gray-300 mb-6">Enter your mobile number</p>

            <Input
              placeholder="Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-6 h-12 bg-white/10 text-white placeholder:text-gray-400 rounded-md"
            />

            <Button className="w-full h-12 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-md"
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>

            <p className="text-sm text-center mt-4 text-gray-400">
              Don’t have an account?{" "}
              <button className="text-green-400 hover:underline" onClick={() => setCurrentView("signup")}>
                Sign Up
              </button>
            </p>
          </>
        )}

        {currentView === "otp" && (
          <>
            <h1 className="text-4xl font-bold mb-4 text-white">Verify OTP</h1>
            <p className="text-gray-300 mb-6">Enter the 4-digit code sent to your phone</p>

            <div className="flex justify-center mb-6">
              <InputOTP value={otpValue} onChange={setOtpValue} maxLength={4}>
                <InputOTPGroup>
                  {[0, 1, 2, 3].map((index) => (
                    <InputOTPSlot key={index} index={index} className="w-12 h-12 bg-white/10 text-white rounded-md text-center border border-white/20" />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
              <button className="hover:underline text-green-400">Resend OTP</button>
              <span className="text-red-400">00:{otpTimer.toString().padStart(2, "0")}</span>
            </div>

            <Button className="w-full h-12 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-md"
              onClick={handleVerifyOTP}
            >
              Verify & Sign In
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  </div>

  {/* Right - Image Background */}
  <div 
  className="hidden lg:block w-full lg:w-1/2 min-h-screen bg-cover bg-center relative order-first lg:order-last"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80')"
  }}
>

    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

    {/* Social Icons */}
    <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10">
      <div className="flex flex-col space-y-4">
        {["𝕏", "f", "📷", "in"].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-12 h-12 bg-white/10 hover:bg-green-500/20 rounded-full flex items-center justify-center text-white hover:text-green-400 transition"
          >
            <span className="text-lg">{icon}</span>
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 px-4 text-xs text-gray-400">
    <span>
      &copy; 2025 <span className="text-green-400">Car Wash</span> All rights reserved. &nbsp; | &nbsp; Terms & Conditions
    </span>
  </div>
</div>


   );
};

export default Auth;
