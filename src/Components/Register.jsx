import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import ic from "../assets/Group.png"

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const HandleRegister2Click = () => {
    navigate("/register2")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirm_password } = formData;

    const userData = {
      name,
      email,
      password,
      confirm_password,
    };

    console.log("Sending data:", userData); // Log the data to be sent

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      console.log("Response data:", data); // Log the response data

      if (!response.ok) {
        throw new Error(data.message || "Failed to register user");
      }

     

  
      navigate("/"); 
    } catch (error) {
      console.error("Error:", error);
      
    }
  };

  return (
    <div className="overflow-hidden h-screen  items-center justify-center bg-[#115AC7] font-poppins">
        <div className="flex mt-5  ">
        <img src={ic} alt="" className="mt-2  ml-24 w-auto h-3/4 " />
        <h1 className=" text-[40px] text-white mx-auto  font-bold">First step in joining us</h1>
        </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white  ml-24 mt-10 rounded-tl-[50px] shadow-md w-full h-full text-center ">
        <div className="mb-10">   
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-1/2 p-2 py-5 border-[solid] border-[#115AC7] border-[1px] rounded mt-20"
          />
        </div>

        <div className="mb-10">      
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-1/2 p-2 py-5 border-[solid] border-[#115AC7] border-[1px] rounded"
          />
        </div>

        <div className="mb-10">
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-1/2 p-2 py-5 border-[solid] border-[#115AC7] border-[1px] rounded"
          />
        </div>

        <div className="mb-10">
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password "
            value={formData.confirm_password}
            onChange={handleChange}
            required
            className="w-1/2 p-2 py-5 border-[solid] border-[#115AC7] border-[1px] rounded"
          />
        </div>

        <button
        onClick={HandleRegister2Click}
          type="submit"
          className="w-1/4 bg-[#D0D0D0] text-white text-[20px] py-5 rounded-xl "
        >
         Create Account
        </button>
      </form>
      
    </div>
  );
}
