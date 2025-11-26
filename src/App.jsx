import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Recipes from "./Pages/recipes";
import Recipebytag from "./Pages/recipebytag";
import SearchResults from "./Pages/SearchResults";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/searchResults" element={<SearchResults/>} />
            <Route path="/details/:onerecipe" element={<Details/>} />
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/recipebytag/:tag" element={<Recipebytag/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
