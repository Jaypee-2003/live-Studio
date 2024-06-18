import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { toggleTheme, themeName } = useTheme();
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Nav>
            <LeftSection>
                <Logo as={Link} to="/">
                    X Studio
                </Logo>
                <ToggleBar onClick={toggleTheme} checked={themeName === 'dark'}>
                    <FaMoon className="icon-moon" />
                    <FaSun className="icon-sun" />
                    <Slider checked={themeName === 'dark'} />
                </ToggleBar>
            </LeftSection>
            <RightSection>
            <NavLinks show={showMenu}>
                <NavLink to="/" onClick={handleMenuToggle}>Home</NavLink>
                <NavLink to="/portfolio" onClick={handleMenuToggle}>Portfolio</NavLink>
                <NavLink to="/about" onClick={handleMenuToggle}>About</NavLink>
                <NavLink to="/gallery" onClick={handleMenuToggle}>Gallery</NavLink>
            </NavLinks>
                <MenuToggle onClick={handleMenuToggle}>
                    <FaBars />
                </MenuToggle>
                <ProfilePic src="https://static.vecteezy.com/system/resources/previews/037/367/788/original/x-logo-studio-letter-x-one-line-icon-logotype-font-vector.jpg" alt="Profile" />
            </RightSection>
        </Nav>
    );
};

const Nav = styled.nav`
    width: 100%;
    max-width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.cardBackground};
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.5s;

    @media (max-width: 768px) {
    max-width: 90%;
    display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 10px;
    }
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-size: 25px;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.5s;
    margin-right: 10px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end; 
    flex: 1;

    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        margin-right: 0;
        position: absolute;
        top: 50px; /* Adjust position from top */
        right: 20px; /* Align to the right side */
        background: ${({ theme }) => theme.cardBackground};
        width: auto; /* Adjust width as needed */
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 10px;
        display: ${({ show }) => (show ? 'flex' : 'none')};
        z-index: 999;
    }
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const MenuToggle = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        margin-top:2px;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
        font-size: 25px;
    }
`;

const ToggleBar = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    width: 60px;
    height: 30px;
    background-color: ${({ theme }) => theme.buttonBackground};
    border-radius: 15px;
    transition: background-color 0.5s;

    .icon-moon, .icon-sun {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.5s;
    }

    .icon-moon {
        left: ${({ checked }) => (checked ? '5px' : 'auto')};
        right: ${({ checked }) => (checked ? 'auto' : '5px')};
    }

    .icon-sun {
        right: ${({ checked }) => (checked ? '5px' : 'auto')};
        left: ${({ checked }) => (checked ? 'auto' : '5px')};
    }

    @media (max-width: 768px) {
        width: 58px;
        height: 30px;
    }
`;

const Slider = styled.div`
    width: 26px;
    height: 26px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${({ checked }) => (checked ? '4px' : '30px')};
    transition: left 0.5s;
`;

const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;

export default Navbar;
