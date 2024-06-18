// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <Section>
            <Title>About</Title>
            <Text>
                I'm a wedding photographer based in San Francisco, California. I believe in the power of capturing authentic moments and creating timeless memories that you can cherish for years to come. My passion for photography started at a young age and has grown into a full-time profession. Whether you're planning an intimate wedding or a grand celebration, I'm dedicated to being a part of your special day and creating beautiful, timeless images that you'll treasure forever.
            </Text>
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

const Text = styled.p`
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
`;

export default AboutSection;
