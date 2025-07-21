import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";


export default function Education_info() {
 const squalification= localStorage.getItem("qualification");
 const spassingyear= localStorage.getItem("passingyear");
 const sinstitude= localStorage.getItem("institude");

  const [qualification, setqualification] = useState(squalification||"");
  const [passingyear, setpassingyear] = useState(spassingyear||"");
  const [institude, setinstitude] = useState(sinstitude||"");

  const handleChange = (event) => {
    const qualifications=event.target.value;
    setqualification(qualifications);
    localStorage.setItem("qualification",qualifications)
  };

const handlepassingyear=(event)=>{
   const passingyears=event.target.value;
    setpassingyear(passingyears);
    localStorage.setItem("passingyear",passingyears)

}
const handleinstitudename=(event)=>{
   const institudes=event.target.value;
    setinstitude(institudes);
    localStorage.setItem("institude",institudes)

}
 
  
  return (
    <div
      style={{
        width: "1000px",
        height: "400px",
        backgroundColor: "whitesmoke",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        marginLeft: "200px",
        padding: "20px",
        boxShadow:"1px 1px ",
          // boxShadow:"2px 1px 1px 1px grey",
        borderRadius:"10px"
      }}
    >
      <div style={{ display: "flex" }}>
        <h3>Qualification : </h3>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="big" variant="filled">
          <InputLabel id="demo-select-small-label">
            Highest Qualification
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={qualification}
            label="Highest Qualification"
            onChange={handleChange}
          >
            <MenuItem value="under 10th">
              <em>under 10th</em>
            </MenuItem>
            <MenuItem value={"10th"}>10th</MenuItem>
            <MenuItem value={"12th"}>12th</MenuItem>
            <MenuItem value={"Bachelor"}>Bachelor's</MenuItem>
            <MenuItem value={"Master"}>Master's</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
        <h3>Year of passing : </h3>
        <input
        type="number" min="1950" max="2025"
        value={passingyear}
        onChange={handlepassingyear}
          style={{
            height: "55px",
            width: "200px",
            borderRadius: "5px",
            fontSize: "20px",
            backgroundColor: "light-dark(rgba(156, 156, 156, 1)",
            border: ".5px solid light-dark(rgb(118, 118, 118) ",
          }}
        />
      </div>

      <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
        <h3>Institution Name :</h3>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          variant="filled"
            value={institude}
        onChange={handleinstitudename}
        />
      </div>
    </div>
  );
}
