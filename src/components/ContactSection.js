import React from 'react';
import styled from 'styled-components';

const ContactPage = () => {
    return (
        <PageContainer>
                <Title>Contact Me</Title>
                <Row>
                    <Col>
                        <MapContainer>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29899.837386390336!2d85.87837439999997!3d20.486553600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677261590166!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 10}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Embed"
                            ></iframe>
                        </MapContainer>
                    </Col>
                    <Col>
                        <Form>
                            <Input type="text" placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                            <Input type="text" placeholder="Subject" />
                            <Textarea rows="5" placeholder="Project Details"></Textarea>
                            <ContactButton>Contact Me</ContactButton>
                        </Form>
                    </Col>
                </Row>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 20px;
    border-radius: 10px;
    width:100%;
    

`;

const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Col = styled.div`
    flex: 1;
    max-width: 500px;
    margin: 30px;
`;

const MapContainer = styled.div`
    max-width: 100%;
    overflow: hidden;
    color: red;
    border-radius:10px;
    width: 600px;
    height: 400px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const ContactButton = styled.button`
    margin-top: 20px;
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

export default ContactPage;
