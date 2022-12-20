import React from "react";
import { FaGithub } from "react-icons/fa"
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <h3>The Odin Project 2022</h3>
            <a href="https://github.com/warithad" target="_blank">
                <FaGithub style={githubLogoStyle} />
            </a>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-family: Arial;
    transition: transform 1s;

    a:hover{
        transform: rotateX(360deg);
        scale: 1.2;
    }
`
const githubLogoStyle = {
    minWidth: "1.5rem",
    minHeight: "1.5rem",
    color: "black"
}


export default Footer;