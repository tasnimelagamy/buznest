
import logo from "../assets/Logo.png"

function Navbar() {
  return (
  <header className=" bg-[#181818]">
  <nav className="mx-auto flex  items-center justify-between  lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      
        <img className=" w-auto" src={logo} alt />
   
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12 text-white ">
     
      <a href="#" className=" font-semibold">Home</a>
      <a href="#" className=" font-semibold">Pricing</a>
      <a href="#" className=" font-semibold">About</a>
      <a href="#" className=" font-semibold">Contact</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end text-white">
     
      <button className="px-4 py-2 text-white font-semibold rounded-full">
           Sign in
          </button>
      <button className="px-4 py-2 bg-blue-600 text-black font-semibold rounded-full hover:bg-blue-700 transition duration-200 rounded-5">
            Register
          </button>
     
    </div>
  </nav>
  
</header>

  

  
  )
}

export default Navbar