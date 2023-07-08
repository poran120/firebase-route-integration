import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInGoogle } = useFirebase();
  return (
    <div>
      <h4>Please Login!</h4>
      <div style={{ margin: "20px" }}>
        <button onClick={signInGoogle}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Enter Your Email"></input>
        <br></br>
        <input type="password" placeholder="Enter Your Password"></input>
        <br></br>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;
