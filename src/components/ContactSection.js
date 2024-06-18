// src/components/ContactSection.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = () => {
    return (
        <Section>
            <Title>Booking & Contact</Title>
            <ContactButton>Contact Me</ContactButton>
        </Section>
    );
};

const Section = styled.section`
    margin: 40px 0;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 20px;
`;

const ContactButton = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export default ContactSection;
