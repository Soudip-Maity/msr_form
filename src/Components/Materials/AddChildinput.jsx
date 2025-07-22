import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


export default function AddChildinput({childvalue,setchildvalue,setchildinput}) {

    const [input,setinput]=useState("")

    const addchildinput=(event)=>{
      setinput(event.target.value)
    }

    const Addchildvalue= ()=>{
      setchildvalue([...childvalue,input]);
      localStorage.setItem("childs",[...childvalue,input])
      setinput([])
      setchildinput(false)

    }
    const handlecancil=()=>{
      setchildinput(false)

    }

   console.log(childvalue);
   
  return (
    <div style={{ display:"flex",flexDirection:"column",gap:"30px"}}>
      <Box
   sx={{display:"flex",gap:"30px"}}
    >
      <TextField id="outlined-basic" label="Child's Name" variant="outlined" value={input} onChange={addchildinput}/>
      <Button variant="contained" color="success"  sx={{minWidth:"20px"}} onClick={Addchildvalue} >add</Button>
      <Button variant="contained" color="error" sx={{minWidth:"20px"}} onClick={handlecancil}>cancil</Button>

    </Box>

    </div>
  );
}
