
import { UserGroupIcon ,HomeIcon , TruckIcon ,LockClosedIcon,CheckBadgeIcon,DocumentTextIcon} from "@heroicons/react/24/outline";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Home() {
  return (
    <div className="font-poppins">
        <div className=" bg-black pt-20 px-40 ">
            <h3 className=" text-[#7B7B7B]  text-[20px]">The ultimate solution for business success</h3>
            <h1 className="text-[50px] text-white ">{`"Tired of juggling tools? Streamline everything with a device built for your business."`}</h1>
            <button className="btn btn-active bg-[#74ACFF] px-12 ml-[550px] my-11 ">Explore</button>
        </div>
        <div className="bg-[#181818] border-[#115AC7] border-[8px] border-t-[0] p-10">
            <h1 className="text-[#1055BC;] font-[700] text-[40px]" > Features That Matter</h1>
            <div className="grid grid-cols-4 gap-4 mt-5">
      <div className="p-4 text-white">
        <UserGroupIcon className="h-8 w-8 pb-2 text-white ml-[130px] " />
        <h1 className="text-center text-[25px]">Storage System</h1>
        <p className="text-center text-[#CACACA] text-[22px]">{`"Manage inventory efficiently with an organized system."`}</p>
      </div>
      <div className="p-4 text-white">
        <HomeIcon className="h-8 w-8 pb-2 text-white ml-[130px] " />
        <h1 className="text-center text-[25px]">POS System</h1>
        <p className="text-center text-[#CACACA] text-[22px]">{`"Process sales quickly and track transactions in real-time."`}</p>
      </div>
      <div className="p-4 text-white">
        < TruckIcon className="h-8 w-8 pb-2 text-white ml-[130px] " />
        <h1 className="text-center text-[25px]">Delivery System</h1>
        <p className="text-center text-[#CACACA] text-[22px]">{`"Streamline deliveries with real-time tracking and updates."`}</p>
      </div>
      <div className="p-4 text-white">
        <LockClosedIcon className="h-8 w-8 pb-2 text-white ml-[130px] " />
        <h1 className="text-center text-[25px]">Secure Cloud Storage</h1>
        <p className="text-center text-[#CACACA] text-[22px]">{`"Keep your data safe with reliable cloud-based storage."`}</p>
      </div>     
    </div>


        </div> {/*storage */}

      <div className="bg-black dark:bg-gray-900 font-poppins">
  <div className="container  py-8 mx-auto">
    <h1 className="text-white text-left text-[25px]">PRICING</h1>
    <h1 className="text-white text-[40px] text-center leading-tight "><span className="text-blue-700 font-bold">O</span>ptimize Your Business <br />
    with the Right Plan:</h1>

    <div className="flex flex-col space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0 mt-[60px] ">
      <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-start  bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 ">
        <div className="flex-shrink-0">
          <h2 className="inline-flex font-bold  text-black text-[25px] ">
          Migrations
          </h2>
          <h6>Starting at</h6>
        </div>
        <div className="flex-shrink-0 ">
        <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
            $1,950
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            /year
          </span>
          <h6>Annual Subscription</h6>
        </div>
         <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
         Get Price Estimate
        </button>
        <ul className="flex-1 space-y-4 text-black text-[15px]">
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Data Migration
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Simple Tax Preparation
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Fund Administration
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Fund Manager
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Investor Records
          </li>
         
        </ul>
       
      </div> {/*first pricing*/}
      <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-start text-white bg-[#0440D9] rounded-lg lg:mx-4  dark:border-gray-700 ">
        <div className="flex-shrink-0">
          <h2 className="inline-flex font-bold text-[25px] ">
          SPVs
          </h2>
          <h6>Starting at</h6>
        </div>
        <div className="flex-shrink-0 ">
        <span className="pt-2 text-4xl font-bold  uppercase dark:text-gray-100">
            $9,950
          </span>
          <span >
            /year
          </span>
          <h6>Setup Cost</h6>
        </div>
         <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white transition-colors bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none">
         Get Price Estimate
        </button>
        <ul className="flex-1 space-y-4 text-white text-[15px]">
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-black bg-green-400 rounded-xl mr-2" />
          Series of Entity Included
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-black bg-green-400 rounded-xl mr-2" />
          Bank Account
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-black bg-green-400 rounded-xl mr-2" />
          Investor Onboarding
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-black bg-green-400 rounded-xl mr-2" />
          Fund Manager
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-black bg-green-400 rounded-xl mr-2" />
          Regulatory Filings
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-black bg-green-400 rounded-xl mr-2" />
          Simple Tax Preparation
          </li>
         
        </ul>
       
      </div> {/*second pricing*/}
      <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-start  bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 ">
        <div className="flex-shrink-0">
          <h2 className="inline-flex font-bold  text-black text-[25px] ">
          Funds
          </h2>
          <h6>Starting at</h6>
        </div>
        <div className="flex-shrink-0 ">
        <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
            $19,500
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            /year
          </span>
          <h6>Annual Subscription</h6>
        </div>
         <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
         Get Price Estimate
        </button>
        <ul className="flex-1 space-y-4 text-black text-[15px]">
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          30 Investments Included
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          18 Month Raising Period
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          36 Month Investing Period
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Annual Financial Statements
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Multiple Closes Supported
          </li>
         
        </ul>
       
      </div> {/*third pricing*/}
      <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-start  bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 ">
        <div className="flex-shrink-0">
          <h2 className="inline-flex font-bold  text-black text-[25px] ">
          Custom Funds
          </h2>
          <h6>Starting at</h6>
        </div>
        <div className="flex-shrink-0 ">
        <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
            $49,500
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            /year
          </span>
          <h6>Annual Subscription</h6>
        </div>
         <button className="inline-flex items-center justify-center px-5 py-2 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
         Get Price Estimate
        </button>
        <ul className="flex-1 space-y-4 text-black text-[15px]">
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Custom Investments
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Custom Raising Period
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Custom Investment Period
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Custom Financial Statements
          </li>
          <li className=" flex  dark:text-gray-400 ">
          <CheckBadgeIcon className="w-5 h-5 text-white bg-green-400 rounded-xl mr-2" />
          Custom Classes
          </li>
         
        </ul>
       
      </div> {/*fourth pricing*/}
 
    </div>

  </div>
</div>{/*pricing section*/}
<div className="bg-white p-8 text-black">
  <h1 className="text-center text-[3rem] font-bold pb-5">Frequently asked questions </h1>
  <div className="flex space-x-60 mb-8">
   <h2 className="font-bold text-[20px] pl-6">Support <br/> & FAQs</h2>
   <p className="pt-4  text-[20px]"> We are here to help with any questions you have about plans, pricing, and supported features.</p>
  </div>
<div className="collapse collapse-plus bg-white mb-5  ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-4xl font-bold">Why BuzNest?</div>
  <div className="collapse-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, rerum. Sapiente suscipit, sit inventore officiis, totam exercitationem accusamus magnam dicta ullam consectetur architecto similique blanditiis ipsam impedit illo, ex modi.</p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 ">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-4xl font-bold">Why us?</div>
  <div className="collapse-content">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias dolorum rerum similique neque, doloribus perspiciatis obcaecati animi minima aperiam suscipit qui, iusto labore! Illum quae officiis omnis perspiciatis. Nihil, placeat!</p>
  </div>
</div>
<div className="collapse collapse-plus mb-5  ">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-4xl font-bold">Why us?</div>
  <div className="collapse-content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, incidunt cupiditate eveniet saepe reprehenderit labore asperiores dolor eos. Ducimus voluptatem cum, rerum sapiente illo officia.</p>
  </div>
  <h1 className="text-center text-[3rem] font-bold pb-8">Need More Help? </h1>
  <div className="flex justify-center align-middle space-x-60">

  <div className="card bg-base-100 w-100 border-[solid] border-[grey] border-[1px] px-8">
  <div className="card-body">
      <SupportAgentIcon  className=" !w-12 !h-12 mx-auto " />
    <h2 className=" text-center font-bold text-[25px]">Looking For Support?</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost text-gray-600 text-[16px]">Contact us <span className="text-[16px] pt-1">{`>`}</span> </button>
    </div>
  </div>
  
 
</div>
  <div className="card bg-base-100 w-100 border-[solid] border-[grey] border-[1px] px-8">
  <div className="card-body">
    <DocumentTextIcon className="h-10 w-10 mx-auto "/>
    <h2 className=" text-center font-bold text-[25px]">Enterprise & Companies</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost text-gray-600 text-[16px]">Read More <span className="text-[16px] pt-1">{`>`}</span> </button>
    </div>
  </div>
  
 
</div>
</div>
</div>

</div>{/*Question section*/}

 

    </div>
  )
}

export default Home