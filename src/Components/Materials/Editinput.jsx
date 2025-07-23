import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Editinput({editvalue,seteditvalue,seteditindex,editindex, setchildvalue,childvalue}) {

const handleEditcancil= ()=>{
  seteditindex("")
}


const handleeditinputvalues=(event)=>{
  seteditvalue(event.target.value)

}

const handleupdate=()=>{
  const updatedChildren = [...childvalue]; 
  updatedChildren[editindex] = editvalue;  
  setchildvalue(updatedChildren);          
  seteditindex(null);                  
  seteditvalue(""); 

}


  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <TextField
            id="outlined-basic"
            label="Child's Name"
            variant="outlined"
            value={editvalue}
            onChange={handleeditinputvalues}
          />
          <Button variant="contained" color="success" sx={{ minWidth: "20px" }} onClick={handleupdate}>
            update
          </Button>
          <Button variant="contained" color="error" sx={{ minWidth: "20px" }} onClick={handleEditcancil}>
            cancil
          </Button>
        </Box>
      </div>
    </div>
  );
}
