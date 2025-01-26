// import  { useState, useEffect } from "react";
import t1 from "../assets/person.png"
import { useNavigate } from "react-router-dom";


    const Dashboard = () => {
        const user = {
          name: "Mohamed",
          purchases: [
            {
              title: "POS System",
              price: 1950,
              billingCycle: "year",
              description: "Annual Subscription",
            },
          ],
        };

        const navigate = useNavigate(); // Initialize useNavigate hook

        const handleAccessClick = () => {
          navigate("/settings"); // Navigate to the /register route
        };
        const handleContactClick = () => {
          navigate("/contact"); // Navigate to the /register route
        };

//    const [user,] = useState(null);

//   useEffect(() => {
//     // Simulate API call
//     fetch("/api/user") // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((data) => setUser(data));
//   }, []);

//   if (!user) return <div>Loading...</div>;

  return (
     
   <div className="items-center justify-center min-h-screen bg-gray-100 p-5 ">
      {/* Header */}
      <div className="flex mb-10 mt-8">
        <img src={t1} className="h-14 w-14 border-2 bg-blue-600 border-black rounded-full p-1 mr-5 " alt="" />
        <h1 className="text-4xl font-bold mt-2">Hello User!</h1>       
      </div>

      {/* Purchases */}
      <h2 className="text-2xl font-semibold mb-6">Last Purchases:</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {user.purchases.map((purchase, index) => (
          <div
            key={index}
            className="bg-white px-5 rounded-xl shadow-lg border border-gray-200 text-center py-4 "
          >
            <h3 className="text-3xl font-bold py-2">{purchase.title}</h3>
            <p className="text-3xl font-semibold text-gray-800 py-2">
              ${purchase.price} <span className="text-sm font-normal">/{purchase.billingCycle}</span>
            </p>
            <p className="text-gray-600 py-2 text-2xl">{purchase.description}</p>
            <button className="bg-blue-500 text-white mt-8 mb-4 py-2 px-4 rounded ">
              More information
            </button>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center justify-end  mt-10 ">
        <button 
        onClick={handleAccessClick}
        className="bg-blue-500 text-white py-4 px-6 mr-5 rounded-full">
          Access Control Panel
        </button>
        <button
        onClick={handleContactClick}
         className="bg-black text-white py-4 px-6 rounded-full">Contact Us</button>
      </div>
    </div>
  
  );
};

export default Dashboard;
