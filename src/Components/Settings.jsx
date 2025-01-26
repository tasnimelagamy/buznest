import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  
  const [formData, setFormData] = useState({
    name: "ABC",
    email: "mhs@gmail.com",
    mobile: "+123 456 789",
    password: "********",
    postcode: "22305",
    address: "Talaat Harb, St",
    city: "Mansoura",
    state: "DKH",
    country: "Egypt",
    businessType: "Market",
    stores: 2,
    warehouses: 1,
    shipProducts: true,
  });
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSettingsClick = () => {
    navigate("/person"); // Navigate to the /register route
  };
    
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert("Your changes have been saved!"); // Display the alert
    navigate("/"); // Navigate to the home page
  };
  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <button 
      onClick={handleSettingsClick}
       className="btn btn-ghost text-gray-600 text-[24px] mb-3"> <span className="text-[24px] ">{`<`}</span>Settings  </button>  
        <div className="flex ml-5 mb-5">
        <div className="w-16 h-16 bg-black rounded-full relative">
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
           </div>
           <div className="flex gap-4 mb-6 ml-5 mt-2">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-5  rounded-2xl flex items-center gap-2"
          >
            Upload <span>&#8593;</span>
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-5 rounded-2xl flex items-center gap-2"
          >
            Delete <span>&#128465;</span>
          </button>
        </div>     
        </div>

       
      
  
      {/* Form */}
      <form
        className="bg-white shadow-md rounded-lg p-8"
        onSubmit={handleSave}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 mr-40">
            {/* Personal Details */}
            <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
                <button
                  type="button"
                  className="text-blue-500 mt-1 text-sm underline"
                >
                  Change Password
                </button>
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
            </div>
            <hr className="mt-10" />

            {/* Business Address Details */}
            <h2 className="text-lg font-semibold mt-8 mb-4">
              Business Address Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className=" flex-1  border-l border-gray-300 pl-16 ">
            <h2 className="text-lg font-semibold mb-4">Business Category</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Business Type</label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Number of Stores</label>
                <input
                  type="number"
                  name="stores"
                  value={formData.stores}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Number of Warehouses
                </label>
                <input
                  type="number"
                  name="warehouses"
                  value={formData.warehouses}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700 ">
                  Do You Ship Products Yourself?
                </label>
                <div className="flex gap-4 mt-1 mb-28">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shipProducts"
                      value={true}
                      checked={formData.shipProducts === true}
                      onChange={() =>
                        setFormData({ ...formData, shipProducts: true })
                      }
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shipProducts"
                      value={false}
                      checked={formData.shipProducts === false}
                      onChange={() =>
                        setFormData({ ...formData, shipProducts: false })
                      }
                    />
                    No
                  </label>
                </div>
              </div>
              <button
                type="submit"

                className="w-1/2 ml-40 bg-blue-500 text-white py-3 rounded-2xl  font-semibold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
