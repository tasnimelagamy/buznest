import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
    const location = useLocation();

  // Define pages where the Navbar and Footer should NOT appear
  const noLayoutPages = ["/login", "/register", "/register2"];

  const shouldHideLayout = noLayoutPages.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render Navbar and Footer */}
      {!shouldHideLayout && <Navbar />}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  )
}

export default Layout