import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";

export default function Employment_info() {
  const eststus = localStorage.getItem("employmentstatus");
  const compname = localStorage.getItem("companyname");
  const sincome = localStorage.getItem("income");

  const [employmentstatus, setemploymentstatus] = useState(eststus || "");
  const [companyname, setcompanyname] = useState(compname || "");
  const [income, setincome] = useState(sincome || "");

  const handleEstatus = (event) => {
    const empststus = event.target.value;
    setemploymentstatus(empststus);
    localStorage.setItem("employmentstatus", empststus);
  };
  const handleCname = (event) => {
    const Cnames = event.target.value;
    setcompanyname(Cnames);
    localStorage.setItem("companyname", Cnames);
  };
  const handleIncome = (event) => {
    const incomes = event.target.value;
    setincome(incomes);
    localStorage.setItem("income", incomes);
  };

  const handleRefreshpage = () => {
    setemploymentstatus("");
    setcompanyname("");
    setincome("");
  };

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
        borderRadius: "10px",
        boxShadow: "1px 1px ",
        // boxShadow:"2px 1px "
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" ,}}>
        <div style={{ display: "flex", }}>
          <h4> Employment Status : </h4>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="big" >
            <InputLabel id="demo-select-small-label"></InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={employmentstatus}
              label="   Employment Status"
              onChange={handleEstatus}
            >
              <MenuItem value={"Employed"}>Employed</MenuItem>
              <MenuItem value={"self-Employed"}>self-Employed</MenuItem>
              <MenuItem value={"student"}>student</MenuItem>
              <MenuItem value={"Unemployed"}>Unemployed</MenuItem>
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

      <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
        <h4>Company Name :</h4>
        <TextField
        disabled={employmentstatus==="student"||employmentstatus==="Unemployed"}
         
          size="small"
          sx={{ m: 1, Width: "200px" }}
          hiddenLabel
          id="filled-hidden-label-normal"
          value={companyname}
          onChange={handleCname}
 
        />
        <h5 style={{ color: "grey" }}>*(if any)</h5>
      </div>

      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h4>Monthly Income : </h4>
        <TextField
           disabled={employmentstatus==="student"||employmentstatus==="Unemployed"}
        size="small"
          type="number"
          value={income}
          onChange={handleIncome}
        />
      </div>
    </div>
  );
}
