import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul style={{ display: "flex" }}>
      <Link to="/Acceuil">
        <li style={{ marginLeft: 10, listStyle: "none" }}>Acceuil</li>
      </Link>
      <Link to="/Films">
        <li style={{ marginLeft: 10, listStyle: "none" }}>Films</li>
      </Link>
    </ul>
  );
}
export default Navigation;
