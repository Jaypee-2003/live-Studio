// src/components/HeroSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from '@react-spring/web';
import { useTheme } from '../contexts/ThemeContext';

const images = [
    "https://i.pinimg.com/originals/42/4a/95/424a9579d058c907196595be361840da.jpg",
    "https://png.pngtree.com/background/20230519/original/pngtree-hd-wallpapers-with-water-droplets-566-x-540-with-blue-gradient-picture-image_2669710.jpg",
    "https://images.squarespace-cdn.com/content/v1/5ebc5b0285bdc72d1aee199d/1683120620013-YU7BQU24HY12WF3NUXVZ/fuji-x-pro2.jpg"
];

const HeroSection = () => {
    const { theme } = useTheme();
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0.8 },
        reset: true,
        reverse: index % 2 === 0,
        delay: 200,
        config: config.molasses,
    });

    return (
        <Hero>
            <SliderContainer>
                <animated.div style={fade}>
                    <HeroImageContainer>
                        <HeroImage src={images[index]} alt={`Slide ${index + 1}`} />
                        <HeroText>
                            <Title>The art of love, the art of light</Title>
                            <Subtitle>Our passion is capturing the beauty of your love story. A moment in time that will last forever</Subtitle>
                            <HeroButton theme={theme}>Book now</HeroButton>
                        </HeroText>
                    </HeroImageContainer>
                </animated.div>
                <NavButtons>
                    <Button onClick={handlePrev}>‹</Button>
                    <Button onClick={handleNext}>›</Button>
                </NavButtons>
            </SliderContainer>
        </Hero>
    );
};

const Hero = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px 0;
`;

const SliderContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    position: relative;
`;

const HeroImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    border-radius: 15px;

    @media (max-width: 768px) {
        height: 400px;
    }

    @media (max-width: 480px) {
        height: 300px;
    }
`;

const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeroText = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    width: 90%;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const Title = styled.h2`
    font-size: 36px;
    margin: 0;
    color: white;

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

const Subtitle = styled.p`
    margin: 10px 0;
    color: white;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const HeroButton = styled.button`
    background-color: ${({ theme }) => theme.buttonBackground};
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.5s;

    &:hover {
        background-color: ${({ theme }) => theme.buttonHoverBackground};
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 6px 12px;
    }
`;

const NavButtons = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Button = styled.button`
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 24px;
    transition: background-color 0.5s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    @media (max-width: 768px) {
        font-size: 20px;
        padding: 8px 16px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        padding: 6px 12px;
    }
`;

export default HeroSection;
