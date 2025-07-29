import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";

export default function Education_info() {
  const squalification = localStorage.getItem("qualification");
  const spassingyear = localStorage.getItem("passingyear");
  const sinstitude = localStorage.getItem("institude");

  const [qualification, setqualification] = useState(squalification || "");
  const [passingyear, setpassingyear] = useState(spassingyear || "");
  const [institude, setinstitude] = useState(sinstitude || "");

  const handleChange = (event) => {
    const qualifications = event.target.value;
    setqualification(qualifications);
    localStorage.setItem("qualification", qualifications);
  };

  const handlepassingyear = (event) => {
    const passingyears = event.target.value.slice(0, 4);
    setpassingyear(passingyears);
    localStorage.setItem("passingyear", passingyears);
  };
  const handleinstitudename = (event) => {
    const institudes = event.target.value;
    setinstitude(institudes);
    localStorage.setItem("institude", institudes);
  };
  const handleRefreshpage = () => {
    setqualification("");
    setpassingyear("");
    setinstitude("");
  };

  console.log(`pppppppppppp${new Date().getFullYear()}`);

  return (
    <div
      style={{
        width: "1000px",
        height: "400px",
        backgroundColor: "whitesmoke",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        // marginLeft: "200px",
        padding: "20px",
        boxShadow: "1px 1px ",
        // boxShadow:"2px 1px 1px 1px grey",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          // padding:"10px"
        }}
      >
        <div style={{ display: "flex" }}>
          <h4>Qualification : </h4>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">
              Highest Qualification
            </InputLabel>
            <Select
              size="small"
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
        <div>
          <Button onClick={handleRefreshpage}>
            <ReplayCircleFilledIcon
              style={{ fontSize: "40px", cursor: "pointer", color: "red" }}
            />
          </Button>
        </div>
      </div>

      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h4>Year of passing : </h4>
        <TextField
          id="outlined-multiline-flexible"
          size="small"
          type="number"
          max={new Date().getFullYear()}
          error={parseInt(passingyear) > new Date().getFullYear()}
          helperText={
            parseInt(passingyear) > new Date().getFullYear()
              ? "Enter Valid Year"
              : ""
          }
          value={passingyear}
          onChange={handlepassingyear}
        />
      </div>

      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h4>Institution Name :</h4>
        <TextField
          id="outlined-multiline-flexible"
          size="small"
          // hiddenLabel
          // variant="text"
          value={institude}
          onChange={handleinstitudename}
        />
      </div>
    </div>
  );
}
