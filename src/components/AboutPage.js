// src/components/AboutPage.js
import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';
import Footer from './Footer';

// import HeroSection from './HeroSection';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.JPG';
import img4 from '../images/img4.jpg';

const AboutPage = () => {
    return (
        <PageContainer>
            <Section>
                <Title>About</Title>
                <Text>
                    I'm a wedding photographer based in San Francisco, California. I believe in the power of capturing authentic moments and creating timeless memories that you can cherish for years to come. My passion for photography started at a young age and has grown into a full-time profession. Whether you're planning an intimate wedding or a grand celebration, I'm dedicated to being a part of your special day and creating beautiful, timeless images that you'll treasure forever.
                </Text>
            </Section>
            <Section>
                <Title>Portfolio</Title>
                <Gallery />
            </Section>
            <Section>
                <Title>Services & Packages</Title>
                <Services>
                    <ServiceCard>
                        <ServiceImage src={img1} alt="Service 1" />
                        <ServiceTitle>Engagement</ServiceTitle>
                        <ServiceText>Capture the love before the big day.</ServiceText>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImage src={img4} alt="Service 2" />
                        <ServiceTitle>Intimate Wedding</ServiceTitle>
                        <ServiceText>Beautiful photos of a small-scale celebration.</ServiceText>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImage src={img3} alt="Service 3" />
                        <ServiceTitle>Full Day Wedding</ServiceTitle>
                        <ServiceText>Comprehensive coverage of your wedding day.</ServiceText>
                    </ServiceCard>
                </Services>
            </Section>
            <Section>
                <Title>Booking & Contact</Title>
                <ContactButton>Contact Me</ContactButton>
            </Section>
            <Section>
                <Title>Testimonials</Title>
                <Testimonials>
                    <Testimonial>
                        <TestimonialImage src={img1} alt="Person 1" />
                        <TestimonialText>
                            "Aurora is incredibly talented and captured our wedding perfectly. The photos are stunning and bring back all the emotions of the day."
                        </TestimonialText>
                        <TestimonialName>Jane Doe</TestimonialName>
                    </Testimonial>
                    <Testimonial>
                        <TestimonialImage src={img2} alt="Person 2" />
                        <TestimonialText>
                            "We are so grateful to Aurora for the amazing photos. She was professional, friendly, and made us feel so comfortable."
                        </TestimonialText>
                        <TestimonialName>John Smith</TestimonialName>
                    </Testimonial>
                <Testimonial>
                        <TestimonialImage src={img3} alt="Person 2" />
                        <TestimonialText>
                            "We are so grateful to Aurora for the amazing photos. She was professional, friendly, and made us feel so comfortable."
                        </TestimonialText>
                        <TestimonialName>John Smith</TestimonialName>
                    </Testimonial>
                </Testimonials>
            </Section>
            <Section>
                <Title>Blog</Title>
                <BlogPosts>
                    <BlogPost>
                        <BlogImage src={img1} alt="Blog 1" />
                        <BlogTitle>How to Choose the Perfect Engagement Ring</BlogTitle>
                    </BlogPost>
                    <BlogPost>
                        <BlogImage src={img4} alt="Blog 2" />
                        <BlogTitle>10 Must-Have Photos for Your Wedding</BlogTitle>
                    </BlogPost>
                    <BlogPost>
                        <BlogImage src={img3} alt="Blog 1" />
                        <BlogTitle>How to Choose the Perfect Engagement Ring</BlogTitle>
                    </BlogPost>
                </BlogPosts>
            </Section>
            <Footer />
        </PageContainer>
    );
};

const PageContainer = styled.div`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 20px;
`;

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

const ContactButton = styled.button`
    display: block;
    margin: 0 auto;
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

const Testimonials = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const Testimonial = styled.div`
    width: 300px;
    padding: 20px;
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 10px;
    text-align: center;
`;

const TestimonialImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
`;

const TestimonialText = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;

const TestimonialName = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const BlogPosts = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const BlogPost = styled.div`
    width: 300px;
    padding: 20px;
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 10px;
    text-align: center;
`;

const BlogImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`;

const BlogTitle = styled.h3`
    font-size: 18px;
    margin-top: 10px;
`;

export default AboutPage;
