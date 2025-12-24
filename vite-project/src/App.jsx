import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HorizontalScroll from "../features/HorizontalScroll";
import About from "../components/About/About";


function App() {
  return (
    <>
    {/* headerは固定にするのでRouterの前に置く */}
    <Header/>
    <Routes>
      <Route path="/" element={<HorizontalScroll/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;


