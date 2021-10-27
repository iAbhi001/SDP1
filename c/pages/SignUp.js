import React from 'react';
import './Logo.png'
import './Registration Form CSS.css'
  
const MultipleInputs = () => {
  
    return(
        <body>
  <form>
    <div class="loginbox">

    <img src="./Logo.png" class = "avatar" alt="LOGO"/>

    <h1>Register Here</h1>
    
    <p>Registration Name</p>
    <input type="text" name=""  placeholder="Your Registration Name" required/>
    <br></br> 
    <p>Regisration ID</p>
    <input type="text" name="" placeholder="Your Registration ID" required/>
    <br></br>
    <p>DOB</p>
    <input type="date" name="" required/>
    <br></br>
    <p>Mobile Number</p>
    <input type="tel" name="" placeholder="Your Mobile Number" required/>
    <br></br>
    <p>Email ID</p>
    <input type="email" name="" placeholder="Your Email ID" />
    <br></br>
    <p>Department</p>
    <input type="text" name="" placeholder=" Your Department" required/>
    <br></br>
    <button type="submit">Register</button>
    </div> 
      </form>
    </body>
    )
  }
  export default MultipleInputs