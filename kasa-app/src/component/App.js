import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Error404 from "./Error404";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom"





function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
