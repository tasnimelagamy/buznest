import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/Register";
import RegisterForm2 from "./Components/Register2";
import Home from './Components/Home';
import About from "./Components/About";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import Checkout from "./Components/Checkout";
import Person from "./Components/Person";
import Layout2 from "./Components/Layout2";
import Settings from "./Components/Settings";

function App() {
  return (
    <Router> 
      
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={ <Home/>} /> 
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={ <Contact/>} />
     


        </Route>  
      <Route path="/" element={<Layout2 />}>
        <Route path="/person" element={ <Person/>} />
        <Route path="/settings" element={ <Settings/>} />


        </Route>  

        <Route path="/register" element={<RegisterForm />} />  {/* Register route */}
        <Route path="/register2" element={<RegisterForm2 />} />  {/* Register route */}
        <Route path="/login" element={<Login />} />  {/* Register route */}
        <Route path="/checkout" element={<Checkout />} />  {/* Register route */}
      </Routes>
    
    </Router>
  );
}

export default App;
