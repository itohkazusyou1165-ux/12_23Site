import {  Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HorizontalScroll from "../features/HorizontalScroll";
import About from "../components/About/About";
import Room from "../components/Room/Room";
import Restaurant from "../components/Restaurant/Restaurant";

function App() {
  return (
    <>
      {/* headerは固定にするのでRouterの前に置く */}
      
      <Header />
      <Routes>
        <Route path="/" element={<HorizontalScroll />} />
        <Route path="/About" element={<About />} />
        <Route path="/Room" element={<Room/>} />        
        <Route path="/Restaurant" element={<Restaurant/>} />      
      </Routes>
     
    </>
  );
}

export default App;
