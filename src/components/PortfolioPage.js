// src/components/AboutPage.js
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import img1 from '../images/img1.jpg';
import Footer from './Footer';

const PortfolioPage = () => {
    const { theme } = useTheme();

    return (
        <PageContainer theme={theme}>
            <ProfileSection>
                <ProfileImage src={img1} alt="Hannah Rutherford" />
                <Name theme={theme}>Hannah Rutherford</Name>
                <Title theme={theme}>Wedding Photographer | New York, NY</Title>
                <FollowButton theme={theme}>Follow</FollowButton>
            </ProfileSection>
            <Section theme={theme}>
                <SectionTitle theme={theme}>About</SectionTitle>
                <Text theme={theme}>
                    I'm a storyteller. I capture moments of love and joy, and I turn them into timeless art. My images are vibrant, candid, and true to life. They're not just photographs; they're memories that you can hold in your hands. When you look at my work, I want you to feel the same emotions that you felt on your wedding day. I want you to laugh, cry, and fall in love all over again. I want you to remember every detail, from the way your partner looked at you to the way the sun set in the sky. That's my promise to you.
                </Text>
            </Section>
            <Section theme={theme}>
                <SectionTitle theme={theme}>Philosophy</SectionTitle>
                <Text theme={theme}>
                    I believe that every couple has a unique love story, and I'm here to help you tell yours. Whether you're eloping in the mountains or saying 'I do' in the city, I'll be by your side, capturing the magic as it unfolds. I take a documentary approach to wedding photography, blending artistry with authenticity. I won't ask you to pose or pretend. Instead, I'll let your love shine through in its purest form. My goal is to create images that feel like you - images that you'll cherish for a lifetime.
                </Text>
            </Section>
            <Section theme={theme}>
                <SectionTitle theme={theme}>Approach</SectionTitle>
                <Text theme={theme}>
                    Your wedding day is a celebration of your love, and I'm here to make sure it's captured beautifully. I'll work with you to create a custom photography timeline that fits your unique vision. Whether you're planning an intimate elopement or a grand ballroom affair, I'll be there to document every moment. From getting ready to the grand exit, I'll be your eyes and ears, capturing the joy, the tears, and everything in between. My goal is to provide you with a seamless, stress-free experience. I'll guide you through the process, answer your questions, and offer advice along the way. My priority is to ensure that you feel comfortable, confident, and cared for from start to finish. I'm more than just a photographer; I'm your trusted partner in creating memories that last a lifetime.
                </Text>
            </Section>
            <Footer />

        </PageContainer>
    );
};

const PageContainer = styled.div`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 40px 20px;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
`;

const ProfileSection = styled.section`
    text-align: center;
    margin-bottom: 40px;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Name = styled.h1`
    font-size: 32px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 20px;
`;

const FollowButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.buttonBackground};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.buttonHoverBackground};
    }
`;

const Section = styled.section`
    margin: 40px 0;
    padding: 20px;
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h2`
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
`;

const Text = styled.p`
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    color: ${({ theme }) => theme.text};
`;

export default PortfolioPage;
