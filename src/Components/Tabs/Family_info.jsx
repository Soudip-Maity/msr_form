import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddChildinput from "../Materials/AddChildinput";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import WomanIcon from "@mui/icons-material/Woman";
import Editinput from "../Materials/Editinput";

export default function Family_info() {
  const item = localStorage.getItem("marrage");
  const profile_gender = localStorage.getItem("gender");
  const sguardian = localStorage.getItem("guardian");
  const sguardianage = localStorage.getItem("guardianage");
  const childname = localStorage.getItem("childname");
  const schilds = localStorage.getItem("childs name");
  console.log(childname);

  const [guardian, setguardian] = useState(sguardian || "");
  const [guardianage, setguardianage] = useState(sguardianage || "");
  const [childinput, setchildinput] = useState(false);
  const [childvalue, setchildvalue] = useState(JSON.parse(schilds)||[]);
 const [editvalue,seteditvalue]= useState("")
 const [editindex,seteditindex]=useState("")


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

  const handleAddinput = () => {
    setchildinput(true);
  };

  const handleEditchild = (index) => {
    seteditindex(index)
    seteditvalue(childvalue[index])
  };

  const handledelchild = (index) => {
    const updatechildvalue = childvalue.filter((_,i) => i !== index);
    setchildvalue(updatechildvalue);
  };

console.log(`abcd ${editvalue}`);
    console.log(editindex);


    useEffect(()=>{
      const childnamearrey=JSON.stringify(childvalue)
      localStorage.setItem("childs name",childnamearrey)
    },[childvalue])

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

          <div
            style={{ display: "flex", gap: "20px", flexDirection: "column" }}
          >
            <div>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={handleAddinput}>
                  <AddIcon />
                  Add Child details
                </Button>
              </Stack>
            </div>
            <div>
              {childinput && (
                <AddChildinput
                  childvalue={childvalue}
                  setchildvalue={setchildvalue}
                  setchildinput={setchildinput}
                />
              )}
            </div>
          </div>

          <div>
            <div>
              {childvalue.map((i, index) => (
                editindex===index?
                <Editinput  editvalue={editvalue} seteditvalue={seteditvalue} seteditindex={seteditindex} editindex={editindex} setchildvalue={setchildvalue} childvalue={childvalue}/>

                :<div style={{ display: "flex" }} key={index}>
                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      minWidth: "100px",
                      fontSize: "20px",
                    }}
                  >
                    <p>{index + 1}.</p>
                    <p>
                      <b>{i}</b>{" "}
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button onClick={()=>handleEditchild(index)}>
                      <EditIcon color="action" />
                    </Button>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button onClick={()=>handledelchild(index)}>
                      <DeleteIcon color="error" />
                    </Button>
                  </div>
                </div>
              ))}
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
