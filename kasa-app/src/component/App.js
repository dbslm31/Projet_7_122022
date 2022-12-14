import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"





function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
