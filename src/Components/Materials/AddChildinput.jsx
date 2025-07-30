import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


export default function AddChildinput({childvalue,setchildvalue,setchildinput,childage,setchildage,userage}) {

    const [input,setinput]=useState("")
    const [inputage,setinputage]=useState("")


    const addchildinput = (event) => {
  const value = event.target.value;
  setinput(value);
};

    const addchildinputage=(event)=>{
     const value= (event.target.value)
     
setinputage(value)
    }



    const Addchildvalue= ()=>{
         if (!input.trim() || !inputage.trim()) {
      alert("Please enter both name and age.");
      return;
    }
    else if(Number(inputage)>=Number(userage)){
      alert("Child's age should be less than guardian's age.");
      return;
    }
      setchildvalue([...childvalue,input]);
        setchildage([...childage,inputage]);
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
      <TextField size="small" id="outlined-basic" label="Child's Name" variant="outlined" value={input} onChange={addchildinput} 
                  autoComplete="off"
      />
      <TextField size="small" id="outlined-basic" label="Age" variant="outlined" value={inputage} type="number" onChange={addchildinputage} sx={{width:"80px"}}
                  autoComplete="off"
      />
      <Button variant="contained" color="success"  sx={{minWidth:"20px"}} onClick={Addchildvalue} >add</Button>
      <Button variant="contained" color="error" sx={{minWidth:"20px"}} onClick={handlecancil}>cancel</Button>

    </Box>

    </div>
  );
}
