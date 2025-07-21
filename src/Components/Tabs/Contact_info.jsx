import { Input, TextField } from "@mui/material";
import React, { useState } from "react";
 
export default function Contact_info() {
const scountry= localStorage.getItem("countryvalue")
const lstate= localStorage.getItem("statevalue")
const scity= localStorage.getItem("cityvalue")


  const [country, setcountry] = useState(scountry||"");
  const [state, setstate] = useState(lstate||"");
  const [city, setcity] = useState(scity||"");

  const handlecountry = (event) => {
    const countryvalue = event.target.value;
    setcountry(countryvalue);
    localStorage.setItem("countryvalue", countryvalue);
  };

  const handlestate = (event) => {
    const statevalue = event.target.value;
    setstate(statevalue);
    localStorage.setItem("statevalue", statevalue);
  };

  const handlecity = (event) => {
    const cityvalue = event.target.value;
    setcity(cityvalue);
    localStorage.setItem("cityvalue", cityvalue);
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "400px",
        backgroundColor: "whitesmoke",
        boxSizing: "border-box",
        display: "flex",
        marginLeft: "200px",
        padding: "20px",
        gap: "20px",
        boxShadow:"1px 1px ",
          // boxShadow:"2px 1px 1px 1px grey",
        borderRadius:"10px"
      }}
    >
      <TextField
        required
        id="outlined-required"
        label="Country"
        value={country}
        onChange={handlecountry}
      />
      <TextField
        required
        id="outlined-required"
        label="state"
        value={state}
        onChange={handlestate}
      />
      <TextField
        required
        id="outlined-required"
        label="city"
        value={city}
        onChange={handlecity}
      />
    </div>
  );
}
