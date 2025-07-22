import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import AddChildinput from "../Materials/AddChildinput";
import Stack from '@mui/material/Stack';


export default function Family_info() {
  const item = localStorage.getItem("marrage");
  const profile_gender = localStorage.getItem("gender");
  const sguardian = localStorage.getItem("guardian");
  const sguardianage = localStorage.getItem("guardianage");
  const childname = localStorage.getItem("childname");
  const schilds= localStorage.getItem("childs");
  console.log(childname);

  const [guardian, setguardian] = useState(sguardian || "");
  const [guardianage, setguardianage] = useState(sguardianage || "");
  const [childinput,setchildinput]= useState(false);
  const[childvalue,setchildvalue]= useState(schilds || []);


  const handlegardianNameChange = (event) => {
    const guardians = event.target.value;
    setguardian(guardians);
    localStorage.setItem("guardian", guardians);
    console.log(guardians);
  };
  const handleAgeChange = (event) => {
    const guardiansage = event.target.value;
    setguardianage(guardiansage);
    localStorage.setItem("guardianage", guardiansage);
    console.log(guardiansage);
  };

  const handleAddinput=()=>{
setchildinput(true)
  }
console.log(`childs name is ${schilds}`);

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
        boxShadow: "1px 1px ",
        // boxShadow:"2px 1px 1px 1px grey",
        borderRadius: "10px",
        overflow: "auto",
      }}
    >
      {item === "yes" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div style={{ display: "flex", gap: "30px" }}>
            <TextField
              required
              id="outlined-multiline-flexible"
              label={
                profile_gender === "male" ? "Wife's name" : "Husband's name"
              }
              multiline
              maxRows={4}
              spellCheck="false"
              value={guardian}
              onChange={handlegardianNameChange}
              style={{ height: "55px", width: "300px" }}
            />

            <input
              type="date"
              value={guardianage}
              onChange={handleAgeChange}
              style={{
                height: "55px",
                width: "200px",
                borderRadius: "5px",
                fontSize: "20px",
                backgroundColor: " ",
                border: ".5px solid grey ",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "20px" ,flexDirection:"column"}}>
            <div>
                 <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={handleAddinput}>
              <AddIcon/>
              Add Child details
            </Button>
              </Stack>
            </div> 
            <div >
              {childinput&&<AddChildinput childvalue={childvalue} setchildvalue={setchildvalue} setchildinput={setchildinput}/>}

            </div>

          </div>

          <div>
            
    <div>
      {
        childvalue.map((i,index)=>(
          <div style={{display:"flex" }} key={index}>
            <p>{index+1}.</p>  <p> {i}</p>
          </div>
        ))

      }  
    </div>

          </div>
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", gap: "30px" }}>
            <TextField
              id="outlined-multiline-flexible"
              label=" fathers's Name"
              multiline
              maxRows={4}
              spellCheck="false"
              value={guardian}
              onChange={handlegardianNameChange}
              style={{ height: "55px", width: "300px" }}
            />

            <input
              type="date"
              value={guardianage}
              onChange={handleAgeChange}
              style={{
                height: "55px",
                width: "200px",
                borderRadius: "5px",
                fontSize: "20px",
                // backgroundColor: "pink ",
                border: ".5px solid grey ",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
