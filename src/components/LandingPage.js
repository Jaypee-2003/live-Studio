// src/pages/LandingPage.js
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
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
        </MainContainer>
    );
};

const MainContainer = styled.div`
    padding: 0 20px;
`;

export default LandingPage;
