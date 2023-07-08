import React from "react";

const Register = () => {
  return (
    <div>
      <h4>Please Register Here</h4>
      <form>
        <input type="text" placeholder="Enter Your Name"></input>
        <br></br>
        <input type="email" placeholder="Enter Your Email"></input>
        <br></br>
        <input type="password" placeholder="Enter Your Password"></input>
        <br></br>
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
};

export default Register;
