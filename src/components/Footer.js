import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialIcons>
                <IconLink href="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                </IconLink>
                <IconLink href="https://www.instagram.com/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </IconLink>
                <IconLink href="https://www.twitter.com/" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </IconLink>
                <IconLink href="https://www.linkedin.com/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </IconLink>
            </SocialIcons>
            <Copyright>
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background: ${({ theme }) => theme.footerBackground};
    color: ${({ theme }) => theme.footerText};
    padding: 20px 0;
    text-align: center;
`;

const SocialIcons = styled.div`
    margin-top: 20px;
`;

const IconLink = styled.a`
    color: ${({ theme }) => theme.footerText};
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.footerHover};
    }
`;

const Copyright = styled.p`
    margin-top: 20px;
    font-size: 14px;
`;

export default Footer;
