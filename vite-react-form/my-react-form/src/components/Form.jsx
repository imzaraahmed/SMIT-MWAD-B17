import React from 'react';
import './components/Form.css';
function  Form () {
 return (
    <div className='container'>
     <h2>Register Form</h2>
     <form>
        <label>Name:</label>
        <input type='text' placeholder='Enter your name' />
         <input type='email' placeholder='Enter your email'/>

     </form>
    </div> 
 )
}