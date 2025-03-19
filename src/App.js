// App.js
import './Style/App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Services_Page from './Pages/Services_Page';
import Projects_Page from './Pages/Projects_Page';
import Team_Page from './Pages/Team_Page';
import WhyChooseUs_Page from './Pages/WhyChooseUs_Page';


// Components
import Header from './Commponents/Header';
import Navbar from './Commponents/Navbar';
import Services from './Commponents/Services';
import WhyChooseUs from './Commponents/WhyChooseUs';
import CallToAction from './Commponents/CallToAction';
import Loading from './Commponents/Loading';
import Projects from './Commponents/Projects';
import Clients from './Commponents/Clients';
import Team from './Commponents/Team';
import Footer from './Commponents/Footer';
import ContactUs from './Commponents/ContactComponent';
import ScrollToTopButton from './Commponents/ScrollToTopButton';
import Product_Details from './Commponents/Product_Details';
import ScrollToTop from './Commponents/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />

          {/* Routes for navigation */}
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Services />
                <WhyChooseUs
                  name="Why Choose Us"
                  deitals="We are a leading provider of IT services, offering a wide range of solutions to meet your business needs."
                />
                <Projects
                  title="Projects"
                  description="Browse our latest client projects by our skilled design and development team."
                />
                <CallToAction />
                <Clients />
                <Team />
                <ContactUs
                  title="Contact Us"
                  description="We are here to help you. Contact us today to discuss your project requirements."
                />
              </>
            } />
            <Route path="/Services_Page" element={<Services_Page />} />
            <Route path="/Team_Page" element={<Team_Page />} />
            <Route path="/Projects_Page" element={<Projects_Page />} />
            <Route path="/projects/:id" element={<Product_Details />} />
            <Route path="/WhyChooseUs_Page" element={<WhyChooseUs_Page />} />
          </Routes>

          
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
