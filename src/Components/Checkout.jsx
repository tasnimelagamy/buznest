import LockIcon from "@mui/icons-material/Lock";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import t1 from '../assets/amex.png'
import t2 from '../assets/visa.png'
import t3 from '../assets/jcb.png'
import logo from '../assets/tt.png'
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCheckoutClick = () => {
    navigate("/settings"); // Navigate to the /register route
  };
  return (
 <div>
    {/* <div className="bg-[#1159C5] h-20 rounded-lg ">
               <img className="mx-auto py-4" src={logo} alt="" />
   
           </div> */}
    <div className="min-h-screen bg-[#181818] text-white ">
    <div className="bg-[#1159C5] h-20 rounded-lg mb-10 ">
               <img className="mx-auto py-4" src={logo} alt="" />
   
           </div>
           <div className="flex justify-center items-center  text-white  p-6 pb-20">
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Payment Method Section */}
      <div className="col-span-2 bg-black rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <h2 className=" font-bold mb-4">Payment Method</h2>
       

        <div className="bg-white text-black rounded-lg p-4 shadow">
          {/* Payment Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="text-gray-600" />
              <span className="font-semibold">Cards</span>
            </div>
            <div className="flex gap-2">
              <img
                src={t2}
                alt="Visa"
                className="h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                alt="Mastercard"
                className="h-5"
              />
              <img
                src={t1}
                alt="Amex"
                className="h-5"
              />
              <img
                src={t3}
                alt="jcb"
                className="h-5"
              />
            </div>
          </div>

          {/* Card Form */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Card number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Expiry date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name on card</label>
              <input
                type="text"
                placeholder="Name on card"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="saveCard" className="h-5 w-5" />
              <label htmlFor="saveCard" className="text-sm">
                Securely save this card for my later purchase
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-[#1159C5] rounded-lg shadow-lg p-6 h-72 my-auto ">
        <h2 className="text-xl font-semibold mb-6">Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Original Price:</span>
            <span>30$</span>
          </div>
          <div className="flex justify-between">
            <span>Discounts:</span>
            <span>10$</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>20$</span>
          </div>
        </div>
        <button onClick={handleCheckoutClick} className="w-full mt-6 p-3 bg-white text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-700">
          <LockIcon />
          Complete Checkout
        </button>
      </div>
    </div>
    </div> {/*test*/}
  </div>
</div>
  )
}

export default Checkout