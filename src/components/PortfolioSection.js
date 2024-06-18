// src/components/PortfolioSection.js
import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';

const PortfolioSection = () => {
    return (
        <Section>
            <Title>Gallery</Title>
            <Gallery />
        </Section>
    );
};

const Section = styled.section`
    margin: 40px 0;
`;

const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
`;

export default PortfolioSection;
