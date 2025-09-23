import React from "react";
const Header = () => {
    return (
        <header style={{
            backgroundColor: "purple",
            color: "white",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height:"50px"
        }}>
            <h1 style={{ margin: 0 }}>Zara Ahmed</h1>
            <nav>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "70px",
                    margin: 0,
                    padding: 0
                }}>
                    <li style={{ cursor: "pointer" }}>Home</li>
                    <li style={{ cursor: "pointer" }}>About Me</li>
                    <li style={{ cursor: "pointer" }}>Contact Me</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;