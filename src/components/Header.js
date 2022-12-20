import React from "react";
import styled from "styled-components";

const Header =()=> {
    return (
        <HeaderContainer>
            <h1>CV APP</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e293b;
    color: white;
    font-family: arial;
    padding: 20px 0;
`

export default Header;