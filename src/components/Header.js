import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    padding: ${props => props.theme.paddings.smallest};
    color: ${props => props.theme.green.dark};
    font-size: 45px;
    font-weight: bold;
`;


const Header = () => (
    <HeaderContainer>
        <p>This is my Header</p>
    </HeaderContainer>
)

export default Header;