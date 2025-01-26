import { useState } from 'react';
import ic from "../assets/Group.png"
import { useNavigate } from 'react-router-dom';

export default function Register2Form() {
  const navigate = useNavigate();
  const HandleFinish = () => {
    navigate("/")
  }
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: '',
    address: '',
    postcode: '',
    businessType: '',
    numberOfStores: 0,
    numberOfWarehouses: 0,
    shipProducts: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked
      : name === 'numberOfStores' || name === 'numberOfWarehouses'
      ? parseInt(value, 10) || 0 // Parse numbers, fallback to 0
      : name === 'shipProducts'
      ? value === 'true'
      : value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { country,
      state,
      city,
      address,
      postcode,
      businessType,
      numberOfStores,
      numberOfWarehouses,
      shipProducts } = formData;

    const userData = {
      country,
      state,
      city,
      address,
      postcode,
      businessType,
      numberOfStores,
      numberOfWarehouses,
      shipProducts
    };

    console.log("Sending data:", userData);
    try {
      const response = await fetch('http://localhost/register-app/business.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Response data:", data); // Log the response data

      if (!response.ok) {
        throw new Error(data.message || "Failed to register user");
      }

      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred: " + error.message);
    } // Show success message
  };
  return (
    <div className="overflow-hidden h-screen  items-center justify-center bg-[#115AC7] font-poppins">
              <div className="flex mt-5  ">
              <img src={ic} alt="" className="mt-2  ml-24 w-auto h-3/4 " />
              <h1 className=" text-[40px] text-white mx-auto  font-bold">Fill Business Information</h1>
              </div>
      <div className="w-full bg-white text-black p-8 rounded-lg  mx-auto ml-24 mt-10 rounded-tl-[50px] shadow-md  h-full ">
        
        <form  onSubmit={handleSubmit} className="  grid grid-cols-2 gap-6 ml-10 ">
          {/* Left Column */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-3/4 px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Country"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="businessType">Business Type</label>
            <input
              type="text"
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-3/4  px-4 py-2  border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Business Type"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-3/4  px-4 py-2  border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="State"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="stores">Number of Stores</label>
            <input
              type="number"
              id="stores"
              name="numberOfStores"
              value={formData.numberOfStores}
              onChange={handleChange}
              className="w-3/4  px-4 py-2  border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Number of Stores"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-3/4  px-4 py-2  border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="warehouses">Number of Warehouses</label>
            <input
              type="number"
              id="warehouses"
              name="numberOfWarehouses"
              value={formData.numberOfWarehouses}
              onChange={handleChange}
              className="w-3/4  px-4 py-2  border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Number of Warehouses"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-3/4  px-4 py-2  border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="postcode">Postcode</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-3/4  px-4 py-2  border border-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Postcode"
            />
          </div>
          <div className="col-span-2 ">
            <label className="block text-sm font-medium mb-4">Do You Ship Products Yourself?</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="shipProducts"
              value="true"
              checked={formData.shipProducts === true}
              onChange={handleChange}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-300"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="shipProducts"
                  value="false"
                  checked={formData.shipProducts === false}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-300"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </form>
        
        <div className="text-center mt-8">
          <button
          onClick={HandleFinish}
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
