import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";


function App() {
  return (
  <BrowserRouter>
   <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/service" element={<Service />} />
   </Routes>
 </BrowserRouter>
 );
}

export default App;
