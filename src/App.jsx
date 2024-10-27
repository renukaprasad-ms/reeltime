import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Explore from "./pages/explore/Explore";
import Details from "./pages/details/Details";
import SearchPage from "./pages/searchpage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore/:mediatype" element={<Explore/>}/>
        <Route path="/Details/:mediatype/:id" element={<Details/>}/>
        <Route path="/search/:query/:mediatype" element={<SearchPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
