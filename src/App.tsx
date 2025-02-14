import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Header from "./components/common/NavBar/NavBar";
import Teachers from "./pages/Teachers/Teachers";

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
              <Route path="/teachers" element={<Teachers />} />
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
