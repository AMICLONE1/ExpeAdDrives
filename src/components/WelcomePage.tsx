import logo from "../assets/logo1.jpg";
import Truck7 from "../assets/truck7.jpg";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-white"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Truck7})`,
          filter: "brightness(0.5)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-transparent opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold drop-shadow-lg">WELCOME</h1>
        <p className="text-lg text-gray-300 italic mt-2">
          Transforming Transit into Advertising
        </p>

        {/* Logo */}
        <img src={logo} className="rounded-xl w-1/4 mt-6 shadow-lg" alt="EXPE Ad-Drives" />

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-4 mt-6">
          <Link to="/login">
            <div className="rounded-lg px-6 py-2 bg-gray-700 hover:bg-gray-600 transition-all shadow-md cursor-pointer">
              Login As Client
            </div>
          </Link>
          <Link to="/login-transport">
            <div className="rounded-lg px-6 py-2 bg-gray-700 hover:bg-gray-600 transition-all shadow-md cursor-pointer">
              Login As Transporter
            </div>
          </Link>
          <Link to="/signup">
            <div className="rounded-lg px-6 py-2 bg-blue-600 hover:bg-blue-500 transition-all shadow-md cursor-pointer">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
