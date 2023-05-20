import React from "react";
import "./topbar.css";
export default function Topbar() {
  function logoutSession() {
    console.log("Calling Logout");
  }
  return (
    <div className="topbarContainer">
      <div className="topbarItem">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        ></link>

        <span className="logo">Turing Technologies</span>
      </div>
      <div className="topbarItem Center"></div>
      <div className="topbarItem Right">
        <button className="topbarLogoutButton" onClick={logoutSession}>
          Logout
        </button>
      </div>
    </div>
  );
}
