import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Program from './Components/Program/Program';
import LocationInformation from './Components/Enroll/Enroll';
import FeaturesSection from './Components/Info/AboutUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feature" element={<FeaturesSection />} />
          <Route path="programs" element={<Program />} />
          <Route path="location" element={<LocationInformation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
