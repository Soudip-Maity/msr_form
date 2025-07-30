import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddChildinput from "../Materials/AddChildinput";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import WomanIcon from "@mui/icons-material/Woman";
import Editinput from "../Materials/Editinput";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";

export default function Family_info() {
  const item = localStorage.getItem("marrage");
  const profile_gender = localStorage.getItem("gender");
  const sguardian = localStorage.getItem("guardian");
  const sguardianage = localStorage.getItem("guardianage");
  const childname = localStorage.getItem("childname");
  const schilds = localStorage.getItem("childs name");
  const userage = localStorage.getItem("userage");
  console.log(childname);

  const [guardian, setguardian] = useState(sguardian || "");
  const [guardianage, setguardianage] = useState(sguardianage || "");
  const [childinput, setchildinput] = useState(false);
  const [childvalue, setchildvalue] = useState(JSON.parse(schilds) || []);
  const [editvalue, seteditvalue] = useState("");
  const [editindex, seteditindex] = useState("");
  const [childage, setchildage] = useState("");
  const [editchildage, seteditchildage] = useState("");

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
    seteditindex(index);
    seteditvalue(childvalue[index]);
    seteditchildage(childage[index]);
  };

  const handledelchild = (index) => {
    const updatechildvalue = childvalue.filter((_, i) => i !== index);
    setchildvalue(updatechildvalue);
  };

  console.log(`abcd ${editvalue}`);
  console.log(editindex);

  useEffect(() => {
    const childnamearrey = JSON.stringify(childvalue);
    const childagearrey = JSON.stringify(childage);
    localStorage.setItem("childs name", childnamearrey);
    localStorage.setItem("childs age", childagearrey);
  }, [childvalue, childage]);

  const handleRefreshpage = () => {
    setguardian("");
    setguardianage("");
    setchildvalue([]);
  };

  console.log(`kkkkkkk${userage}`);

  return (
    <div
      style={{
        width: "1000px",
        height: "400px",
        backgroundColor: "whitesmoke",
        boxSizing: "border-box",
        display: "flex",
        // marginLeft: "200px",
        padding: "20px",
        boxShadow: "1px 1px ",
        // boxShadow:"2px 1px 1px 1px grey",
        borderRadius: "10px",
        overflow: "auto",
      }}
    >
      {item === "yes" ? (
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "30px" }}>
              <TextField
                size="small"
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
                  autoComplete="off"
              />
              <TextField
                size="small"
                type="number"
                required
                id="outlined-multiline-flexible"
                label={
                  profile_gender === "male" ? "Wife's age" : "Husband's age"
                }
                spellCheck="false"
                value={guardianage}
                onChange={handleAgeChange}
                  autoComplete="off"
              />

              {/* <input
                type="number"
                value={guardianage}
                onChange={handleAgeChange}
                style={{
                  height: "40px",
                  width: "200px",
                  borderRadius: "5px",
                  fontSize: "20px",
                  background: "none",
                  border: ".5px solid lightgrey ",
                }}
              /> */}
            </div>

            <div>
              <Button onClick={handleRefreshpage}>
                <ReplayCircleFilledIcon
                  style={{ fontSize: "40px", cursor: "pointer", color: "red" }}
                />
              </Button>
            </div>
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
                  childage={childage}
                  setchildage={setchildage}
                  userage={userage}
                />
              )}
            </div>
          </div>

          <div>
            <div>
              <p style={{ display: "flex", justifyContent: "flex-start" }}>
                Child's Names
              </p>

              {childvalue.map((i, index) =>
                editindex === index ? (
                  <Editinput
                    editvalue={editvalue}
                    seteditvalue={seteditvalue}
                    seteditindex={seteditindex}
                    editindex={editindex}
                    setchildvalue={setchildvalue}
                    childvalue={childvalue}
                    childage={childage}
                    setchildage={setchildage}
                    userage={userage}
                    editchildage={editchildage}
                    seteditchildage={seteditchildage}
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      height: "30px",
                      paddingBottom: "10px",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "30px",
                        minWidth: "100px",
                        fontSize: "16px",
                        alignItems: "center",
                      }}
                    >
                      <p>{index + 1}.</p>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "200px",
                          alignItems: "center",
                        }}
                      >
                        <p>Name : {i}</p> <p> Age : {childage[index]}</p>
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button onClick={() => handleEditchild(index)}>
                        <EditIcon color="action" style={{ height: "20px" }} />
                      </Button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button onClick={() => handledelchild(index)}>
                        <DeleteIcon color="error" />
                      </Button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "30px" }}>
              <TextField
                size="small"
                id="outlined-multiline-flexible"
                label=" Father's Name"
                multiline
                maxRows={4}
                spellCheck="false"
                value={guardian}
                onChange={handlegardianNameChange}
                style={{ height: "55px", width: "300px" }}
              />

              <TextField
                size="small"
                type="number"
                label=" Father's age"
                value={guardianage}
                onChange={handleAgeChange}
              />
            </div>
            <div>
              <Button onClick={handleRefreshpage}>
                <ReplayCircleFilledIcon
                  style={{ fontSize: "40px", cursor: "pointer", color: "red" }}
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
