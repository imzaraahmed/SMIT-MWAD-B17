import React from "react";


function Card(props) {
    return (

        <div style={{ width: "400px", border: "0px solid white", textAlign: "center",
        borderRadius:"10px", backgroundColor:"#04043E", padding:"20px", color:"white" }}>
            <img src={props.image} alt="" style={{ width: "100%" }}></img>
            <h3 >{props.title}</h3>
            <p style={{fontFamily:"sans-serif",fontWeight:"bold"}}>{props.discription}</p>
            <button style={{backgroundColor:"purple",color:"white",borderRadius:"5px",cursor: "pointer", padding:"20px 40px"}}>{props.btntxt} </button>
        </div>
    );
}
export default Card;