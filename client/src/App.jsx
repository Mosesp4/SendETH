import { Navbar, Footer, Services, Transactions, Welcome, BackToTop } from './components';
import { Route, Routes } from 'react-router-dom';
import Market from './components/pages/Market';
import Service from './components/pages/Service';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
// import Coin from './components/FullMarket/Coin';


const App = () => {
  return (
    
      <div className="h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
        </div>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          {/* <Route path="/coin" element={<Coin />} /> */}
        </Routes>
        <BackToTop />
        <Footer />
      </div>
  );
}

export default App;
