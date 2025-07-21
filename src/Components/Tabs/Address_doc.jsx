import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
export default function Address_doc() {
  const country = localStorage.getItem("countryvalue");
  const sidproof = localStorage.getItem("idproof");
  const sidproofno = localStorage.getItem("idproofno");
  const saddress = localStorage.getItem("address");

  const [idproof, setidproof] = useState(sidproof || "");
  const [idproofno, setidproofno] = useState(sidproofno || "");
  const [address, setaddress] = useState(saddress || "");

  const handleaddress = (event) => {
    const addresses = event.target.value;
    setaddress(addresses);
    localStorage.setItem("address", addresses);
  };

  const handleidproof = (event) => {
    const proofs = event.target.value;
    setidproof(proofs);
    localStorage.setItem("idproof", proofs);
  };
  const handleidproofno = (event) => {
    const proofsno = event.target.value;
    setidproofno(proofsno);
    localStorage.setItem("idproofno", proofsno);
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
        marginLeft: "200px",
        padding: "20px",
        gap: "20px",
        borderRadius:"10px",
        boxShadow:"1px 1px ",

      }}
    >
      <div style={{ display: "flex", gap: "20px", height: "fixed" }}>
        <h3>Address :</h3>
        <TextField
          id="standard-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
          variant="standard"
          value={address}
          onChange={handleaddress}
          sx={{ minWidth: "600px" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        <div style={{ display: "flex" }}>
          {country === "india" ? (
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Proof of Identity
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={idproof}
                label="Proof of  Identity"
                onChange={handleidproof}
              >
                <MenuItem value={"Aadhar"}>Aadhar </MenuItem>
                <MenuItem value={"passport"}>passport</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Proof of Identity
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={idproof}
                label="Proof of  Identity"
                onChange={handleidproof}
              >
                <MenuItem value={"passport"}>passport</MenuItem>
              </Select>
            </FormControl>
          )}
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <h3>{idproof === "Aadhar" ? "Aadhar No :" : "Passport No : "}</h3>
          <TextField
            sx={{ m: 1, Width: "200px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            value={idproofno}
            onChange={handleidproofno}
            variant="filled"
          />
          <h5 style={{ color: "grey" }}>*(if any)</h5>
        </div>
      </div>

      <div></div>
    </div>
  );
}
