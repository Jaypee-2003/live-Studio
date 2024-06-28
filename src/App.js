import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Gallery from './components/Gallery';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage'; // New Page
// import PricingPage from './components/PricingPage';     // New Page
// import FAQPage from './components/FAQPage';             // New Page
import ContactSection from './components/ContactSection';
import { ThemeContextProvider } from './contexts/ThemeContext';
import styled from 'styled-components';

const App = () => {
    return (
        <ThemeContextProvider>
            <Router>
                <Container>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        {/* <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/faq" element={<FAQPage />} /> */}
                        <Route path="/contact" element={<ContactSection />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </Container>
            </Router>
        </ThemeContextProvider>
    );
};

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background 0.5s, color 0.5s;
`;

export default App;
