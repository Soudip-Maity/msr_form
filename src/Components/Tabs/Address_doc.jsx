import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";

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

  const handleRefreshpage = () => {
    setidproof("");
    setidproofno("");
    setaddress("");
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
        gap: "20px",
        borderRadius: "10px",
        boxShadow: "1px 1px ",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "20px", alignItems:"center" }}>
          <h4>Address :</h4>
          <TextField
          size="small"
            label="Address"
            multiline
            maxRows={4}
            value={address}
            onChange={handleaddress}
            sx={{ minWidth: "600px" }}
            autoComplete="off"
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

      <div
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        <div style={{ display: "flex",alignItems:"center" }}>
          {country === "India" ? (
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-helper-label" size="small">
                Proof of Identity
              </InputLabel>
              <Select
              size="small"
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
              <InputLabel id="demo-simple-select-helper-label" size="small">
                Proof of Identity
              </InputLabel>
              <Select
              size="small"
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

        <div style={{ display: "flex", gap: "20px",alignItems:"center" }}>
          <h4>{idproof === "Aadhar" ? "Aadhar No :" : "Passport No : "}</h4>
          <TextField
          type="number"
          size="small"
            sx={{ m: 1, Width: "200px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            value={idproofno}
            onChange={handleidproofno}
            autoComplete="off"
          />
          <h5 style={{ color: "grey" }}>*(if any)</h5>
        </div>
      </div>

      <div></div>
    </div>
  );
}
