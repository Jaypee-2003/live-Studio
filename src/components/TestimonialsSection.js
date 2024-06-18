// src/components/TestimonialsSection.js
import React from 'react';
import styled from 'styled-components';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.JPG';

const TestimonialsSection = () => {
    return (
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
                    <TestimonialImage src={img3} alt="Person 3" />
                    <TestimonialText>
                        "Aurora is a true professional who takes great pride in her work. Her photos are breathtaking, and we will treasure them forever."
                    </TestimonialText>
                    <TestimonialName>Emily Johnson</TestimonialName>
                </Testimonial>
            </Testimonials>
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
    margin-bottom: 10px;
`;

const TestimonialText = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const TestimonialName = styled.h4`
    font-size: 18px;
    font-weight: bold;
`;

export default TestimonialsSection;
