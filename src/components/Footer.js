import React from "react";
import { FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <div style={footerDivStyle}>
            <h3>The Odin Project 2022</h3>
            <a  href="https://github.com/warithad" target="_blank">
                <FaGithub style={githubLogoStyle}/>
            </a>
        </div>
    )
}

const githubLogoStyle = {
    minWidth: "1.5rem",
    minHeight: "1.5rem",
}

const footerDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    fontFamily: "Arial"
}

export default Footer;