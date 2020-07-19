import React from "react";

const Back = () => {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
      style={{
        width:"60px",
        fontSize: "16px",
        lineHeight: "18px",
        color: "#58595B",
        border:"1px solid gray",
        outline: "none",
        backgroundColor: "white",
        cursor: "pointer",
        display: "flex",
        borderRadius:"5px",
        justifyContent: "space-between",
        alignItems:"center",
        marginBottom: "1em" 
    }}
    >
      <img
        src={require("../../assets/icons/back-arrow.svg")}
        alt="back arrow"
        
      />
      Back
    </button>
  );
};

export default Back;
