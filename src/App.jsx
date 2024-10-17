import "./App.css";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Explore from "./pages/explore/Explore";
import Details from "./pages/details/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore/:mediatype" element={<Explore/>}/>
        <Route path="/Details/:mediatype/:id" element={<Details/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
