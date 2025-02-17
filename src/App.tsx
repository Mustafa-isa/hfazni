import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Header from "./components/common/NavBar/NavBar";
import Teachers from "./pages/Teachers/Teachers";
import Child from "./pages/Child/Child";
import Questiuons from "./pages/Questiuons/Questiuons";
import WhatsAppButton from "./components/common/Whatsapp/Whatsapp";

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
              <Route path="/kids" element={<Child />} />
              <Route path="/faq" element={<Questiuons />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
        <WhatsAppButton />
      </Router>
    </div>
  );
}

export default App;
