import React from "react";
import Card from "./Card";
import college from "../images/college.png";
import smit from "../images/smit.png";
import vu from "../images/vu.png";
const Academics = (props) => {
    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "#800080", padding:"50px" }}>
                <h1 style={{ textAlign: "center", margin:"0px", padding:"0px", color:"white" }}>{props.title}</h1>
                <div style={{ display: "flex", justifyContent: "space-between", padding:"30px 0px" }}>

                    <Card image={college} title="Intermediate" discription="Passed from Govt Premier College" btntxt="Learn More" />
                    <Card image={vu} title="BSCS" discription="Doing from Virtual University Pakistan" btntxt="Learn More" />
                    <Card image={smit} title="SMIT" discription="Learning Web Development" btntxt="Learn More" />
                </div>
            </div>
        </>

    );
}
export default Academics;