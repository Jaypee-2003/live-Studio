// src/pages/LandingPage.js
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from './Footer';
import TestimonialsSection from '../components/TestimonialsSection';



const LandingPage = () => {
    return (
        <MainContainer>
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
            <TestimonialsSection />
            <Footer />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    padding: 0 20px;
`;

export default LandingPage;
