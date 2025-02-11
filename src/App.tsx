import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import Footer from "./components/common/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Header from "./components/common/NavBar/NavBar";

function App() {
  return (
    <div className="relative"> 
    <Header />
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer Section */}
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
