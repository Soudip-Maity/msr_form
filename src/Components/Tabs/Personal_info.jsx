import React, { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function Personal_info() {
  const gusername = localStorage.getItem("username");
  const guserage = localStorage.getItem("userage");
  const ggender = localStorage.getItem("gender");
  const gmarrage = localStorage.getItem("marrage");


  
  const [name, setName] = useState(gusername || "");
  const [age, setAge] = useState(guserage || "");
  const [gender, setGender] = useState(ggender || "");
  const [married, setmarried] = useState(gmarrage || "");
  const [pimg, setpimg] = useState("");

  const handleNameChange = (event) => {
    const username = event.target.value;
    setName(username);
    localStorage.setItem("username", username);
    console.log(username);
  };

  const handleAgeChange = (event) => {
    const userage = event.target.value;
    setAge(userage);
    localStorage.setItem("userage", userage);
  };

  const handleGenderChange = (event) => {
    const gen = event.target.value;
    setGender(gen);
    localStorage.setItem("gender", gen);
  };

  const handleChange = (event) => {
    const maritalStatus = event.target.value;
    if (maritalStatus) setmarried(maritalStatus);
    localStorage.setItem("marrage", maritalStatus);
  };

  console.log(ggender);

  return (
    <div
      style={{
        width: "1000px",
        height: "400px",
        backgroundColor: "whitesmoke",
        boxSizing: "border-box",
        display: "flex",
        marginLeft: "200px",
        boxShadow:"1px 1px ",
        borderRadius:"10px"

      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          // backgroundColor: "red",
          width: "400px",
        borderRadius:"10px"

        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "200px", height: "200px", border: "1px solid " }}
          >
            <img
              src={pimg || "./alt_dp.png"}
              alt="profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setpimg(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </Button>
        </div>
      </div>

      <div
        style={{
          boxSizing: "border-box",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          // backgroundColor: "grey",
          width: "600px",
          paddingLeft: "30px",
          borderLeft:".5px dotted black"
        }}
      >
        <div style={{ display: "flex", gap: "30px" ,flexDirection:"column"}}>
          <div style={{display:"flex",gap:"30px"}}>
<h3>Name :</h3>
  <TextField
            required
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
            spellCheck="false"
            value={name}
            onChange={handleNameChange}
            style={{ height: "55px", width: "300px" }}
          />
          </div>
        
            <div style={{display:"flex",gap:"30px"}}>
              <h3>DOB : </h3>
                  <input
            type="date"
            min="1950-01-01"
            max="2025-07-16"
            value={age}
            onChange={handleAgeChange}
            style={{
              height: "55px",
              width: "200px",
              borderRadius: "5px",
              fontSize: "20px",
              // backgroundColor: " grey",
              border: ".5px solid  ",
            }}
          />
            </div>
      
        </div>

        <div style={{ display: "flex", gap: "30px" }}>
          <FormControl style={{ display: "flex" }} required>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="male"
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div style={{ display: "flex" }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Married ?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={married}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
