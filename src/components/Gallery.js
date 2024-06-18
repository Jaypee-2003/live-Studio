import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.JPG';
import img4 from '../images/img4.jpg';

const Gallery = () => {
    return (
        <GalleryContainer>
            <GalleryItem src={img1} alt="Gallery 1" />
            <GalleryItem src={img2} alt="Gallery 2" />
            <GalleryItem src={img3} alt="Gallery 3" />
            <GalleryItem src={img4} alt="Gallery 4" />
            <GalleryItem src={img4} alt="Gallery 4" />
            <GalleryItem src={img3} alt="Gallery 3" />
            <GalleryItem src={img2} alt="Gallery 2" />
            <GalleryItem src={img1} alt="Gallery 1" />
        </GalleryContainer>
    );
};

const GalleryContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
`;

export default Gallery;
