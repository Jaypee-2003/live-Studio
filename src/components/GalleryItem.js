import React from 'react';
import styled from 'styled-components';

const GalleryItem = ({ src, alt }) => {
    return <Item src={src} alt={alt} />;
};

const Item = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
`;

export default GalleryItem;
