import React from "react";

const Header =()=> {
    return (
        <div style={headerBoxStyle}>
            <h1 style={headerStyle}>CV APP</h1>
        </div>
    )
}

const headerBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e293b",
}

const headerStyle = {
    color: "white",
    fontFamily: "Arial"
}

export default Header;