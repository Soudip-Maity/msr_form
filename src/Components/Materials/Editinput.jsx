import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Editinput({editvalue,seteditvalue,seteditindex,editindex, setchildvalue,childvalue,childage,setchildage,userage,editchildage,seteditchildage}) {

const handleEditcancil= ()=>{
  seteditindex("")
}


const handleeditinputvalues=(event)=>{
  seteditvalue(event.target.value)

}
const handleeditageinputvalues=(event)=>{
  seteditchildage(event.target.value)

}

const handleupdate=()=>{
  if (editchildage>=userage){
      alert("Child's age should be less than guardian's age.");
      return;
  }
  const updatedChildren = [...childvalue]; 
  const updatedChildren_age = [...childage]; 
  updatedChildren[editindex] = editvalue;  
  updatedChildren_age[editindex] = editchildage;  
  setchildvalue(updatedChildren);          
  setchildage(updatedChildren_age);          
  seteditindex(null);                  
  seteditvalue(""); 
  seteditchildage(""); 

}


  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <TextField
          size="small"
            id="outlined-basic"
            label="Child's Name"
            variant="outlined"
            value={editvalue}
            onChange={handleeditinputvalues}
                autoComplete="off"
          />
          <TextField
          size="small"
          type="number"
            id="outlined-basic"
            label="Age"
            variant="outlined"
            value={editchildage}
            onChange={handleeditageinputvalues}
            sx={{width:"80px"}}
                autoComplete="off"
          />
          <Button variant="contained" color="success" sx={{ minWidth: "20px" }} onClick={handleupdate}>
            update
          </Button>
          <Button variant="contained" color="error" sx={{ minWidth: "20px" }} onClick={handleEditcancil}>
            cancel
          </Button>
        </Box>
      </div>
    </div>
  );
}
