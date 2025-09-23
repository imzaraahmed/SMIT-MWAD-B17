import React from "react";
import bg from "./bg-1.jpg";
const Hero = () => {
    return (
        <section style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
        }}
        >
            <div style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                padding: "40px",
                borderRadius: "10px",
            }}
            >
                <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>Welcome to My React App</h1>
                <p style={{ fontSize: "22px", marginBottom: "30px" }}>Build modern web applications easily with React.</p>
                <button style={{
            backgroundColor: "white",
            color: "purple",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >Click Me</button>
            </div>
        </section>
    );
}
export default Hero;