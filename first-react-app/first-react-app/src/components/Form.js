import React from "react";
const Form = () => {
    return(
        <>
        <form>
            <div style={{textAlign:"center",backgroundColor:"purple",padding:"50px"}}>
                 
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "40px",borderRadius: "10px", color:"white"}}>
                
                <h1>Contact Me</h1>
                <p>If you want to hire me, please provide email address, i will send you my resume.</p>
            
                <input type="text" style={{padding:"10px", width:"500px"}}></input>
                <br></br><br></br>
                 <button style={{padding:"10px 50px"}}>Submit</button>
                 </div>
            </div>
        </form>

        </>


    );
}
export default Form;