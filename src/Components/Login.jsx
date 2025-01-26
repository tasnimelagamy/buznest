import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../assets/tt.png"
import { useNavigate } from "react-router-dom";
 
 function Login() {
  const Navigate = useNavigate();

  const HandleSignupClick = () => {
    Navigate("/register")
  }
  const HandleLogClick = () => {
    Navigate("/person")
  }
   return (
    
    <div >
        <div className="bg-[#1159C5] h-20 rounded-lg ">
            <img className="mx-auto py-4" src={logo} alt="" />

        </div>
        
    <div className="flex items-center justify-center min-h-screen bg-white">
           
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-black mb-6">Welcome back!</h1>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
          onClick={HandleLogClick}
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4 text-gray-400">
          Donot have an account?{" "}
          <a href="#" onClick={HandleSignupClick} className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </div>
        <div className="mt-6 text-center text-gray-400">Or</div>
        <div className="flex justify-center mt-4 space-x-4">
          {/* Social Media Buttons */}
          <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
            <FacebookIcon className="text-white" />
          </button>
          <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
            <AppleIcon className="text-white" />
          </button>
          <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
            <GoogleIcon className="text-white" />
          </button>
        </div>
      </div>
    </div>
    </div>
   )
 }
 
 export default Login