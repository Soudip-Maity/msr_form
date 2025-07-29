import { Typography } from "@mui/material";
import React from "react";

export default function Review() {
  const Ppic = localStorage.getItem("profileImage");
  const username = localStorage.getItem("username");
  const userage = localStorage.getItem("userdob");
  const marrage = localStorage.getItem("marrage");
  const gender = localStorage.getItem("gender");
  const address = localStorage.getItem("address");
  const guardian = localStorage.getItem("guardian");
  const institude = localStorage.getItem("institude");
  const qualification = localStorage.getItem("qualification");
  const passingyear = localStorage.getItem("passingyear");
  const countryvalue = localStorage.getItem("countryvalue");
  const gmail = localStorage.getItem("email_id");
  const phone_number = localStorage.getItem("phone_no");
  return (
    <div
      style={{
        width: "1000px",
        height: "400px",
        backgroundColor: "pink",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        // marginLeft: "200px",
        // padding: "10px",
        borderRadius: "10px",
        boxShadow: "1px 1px ",
        overflow: "auto",
        alignItems: "left",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src="./image.png"
          alt=""
          style={{ width: "100%", height: "80px" }}
        />
        <img
          src={Ppic}
          alt="alt_dp.png"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginTop: "-60px",
            marginLeft: "10px",
          }}
        />
        <h2 style={{ display: "flex", marginTop: "-1px", paddingLeft: "10px" }}>
          {username}
        </h2>
        <p style={{ display: "flex", marginTop: "-20px", paddingLeft: "20px" }}>
          {gmail}
        </p>
      </div>

      <div style={{ width: "100%", height: "200px", display: "flex" }}>
        <div
          style={{
            width: "45%",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "20px",
            borderRight: ".5px dotted  ",
          }}
        >
          <div style={{ display: "flex", height: "30px",marginTop:"-10px" }}>
            <h3>About :-</h3>
          </div>
          <div style={{ display: "flex", height: "30px", gap: "10px" }}>
            <p>Sex : </p>
            <p>{gender}</p>
          </div>
          <div style={{ display: "flex", height: "30px", gap: "10px" }}>
            <p>DOB : </p>
            <p>{userage}</p>
          </div>
          <div style={{ display: "flex", height: "30px", gap: "10px" }}>
            <p>marital status : </p>
            <p>{marrage==="yes"?"Married":"Unmarried"}</p>
          </div>
          <div style={{ display: "flex", height: "30px", gap: "10px" }}>
            <p>Guardian : </p>
            <p>{guardian}</p>
          </div>
          <div
            style={{
              display: "flex",
              height: "30px",
              gap: "4px",
              width: "100%",
            }}
          >
            <p>Address :</p>
            <p>{address}</p>
          </div>
        </div>

        <div
          style={{
            width: "25%",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: "20px",
          }}
        >
        
            <div
              style={{ display: "flex", height: "30px", marginTop: "-30px" }}
            >
              <h3>Contact Info:-</h3>
            </div>
            <div style={{ display: "flex", height: "30px", gap: "10px" }}>
              <p>Phone No : </p>
              <p>{phone_number}</p>
            </div>
            <div style={{ display: "flex", height: "30px", gap: "10px" }}>
              <p>Email : </p>
              <p>{gmail}</p>
            </div>
          
          
        </div>
        <div   style={{
            width: "30%",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: "20px",
            borderLeft:".5px dotted"
          }}>
             <div
              style={{ display: "flex", height: "30px", marginTop: "-30px" }}
            >
              <h3>Education:-</h3>
            </div>
            <div style={{ display: "flex", height: "30px", gap: "10px" }}>
              <p>Qualification : </p>
              <p>{qualification}</p>
            </div>
            <div style={{ display: "flex", height: "30px", gap: "10px" }}>
              <p>Passing Year : </p>
              <p>{passingyear}</p>
            </div>

          </div>
      </div>
    </div>
  );
}
