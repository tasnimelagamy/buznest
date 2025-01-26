import t1 from "../assets/mudar.png"

function Footer() {
  return (
    <footer className="footer bg-[#181818]  text-[white] p-10">


    <nav className="text-[18px] text-[#F4E9CD] pl-40   ">
      <img src={t1} alt="" />
      <h1 className="pl-2 mt-2">Copyrights @ 2025 Mudar </h1>
      <h1 className="pl-10 ">All rights reserved. </h1>
    </nav>
      <nav >
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact us</a>
      <a className="link link-hover">Pricing</a>
    </nav>
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">POS System</a>
      <a className="link link-hover">Storage System</a>
      <a className="link link-hover">Delivery System</a>
    </nav>
  
    <nav>
      <h6 className="footer-title">Support</h6>
      <a className="link link-hover">Help center</a>
      <a className="link link-hover">Terms of service</a>
      <a className="link link-hover">Legal</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Status</a>
    </nav>
    <form>
      <h6 className="footer-title">Stay up to date</h6>
      <fieldset className="form-control w-80">
        <label className="label">
          
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="Your email address"
            className="input input-bordered join-item text-black" />
          <button className="btn btn-primary bg-[#124A9B] join-item rounded-md">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
  )
}

export default Footer