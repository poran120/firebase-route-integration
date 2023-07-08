import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, googleSignOut } = useFirebase();
  return (
    <div className="header_container">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/register">Register</Link>
      <span>{user?.displayName && user.displayName}</span>
      {user?.uid ? (
        <button onClick={googleSignOut}>Sign Out</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
