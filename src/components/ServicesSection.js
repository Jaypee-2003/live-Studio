// src/components/ServicesSection.js
import React from 'react';
import styled from 'styled-components';
import img1 from '../images/img1.jpg';
import img4 from '../images/img4.jpg';
import img3 from '../images/img3.JPG';
// import img4 from '../images/img4.jpg';

const ServicesSection = () => {
    return (
        <Section>
            <Title>Services & Packages</Title>
            <Services>
                <ServiceCard>
                    <ServiceImage src={img1} alt="Service 1" />
                    <ServiceTitle>Elopement</ServiceTitle>
                    <ServiceText>Up to 4 hours of coverage</ServiceText>
                </ServiceCard>
                <ServiceCard>
                    <ServiceImage src={img4} alt="Service 2" />
                    <ServiceTitle>Intimate Wedding</ServiceTitle>
                    <ServiceText>Up to 8 hours of coverage</ServiceText>
                </ServiceCard>
                <ServiceCard>
                    <ServiceImage src={img3} alt="Service 3" />
                    <ServiceTitle>Full Day Wedding</ServiceTitle>
                    <ServiceText>Up to 12 hours of coverage</ServiceText>
                </ServiceCard>
            </Services>
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

const Services = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const ServiceCard = styled.div`
    width: 300px;
    padding: 20px;
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 10px;
    text-align: center;
`;

const ServiceImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`;

const ServiceTitle = styled.h3`
    font-size: 24px;
    margin: 20px 0 10px;
`;

const ServiceText = styled.p`
    font-size: 16px;
`;

export default ServicesSection;
