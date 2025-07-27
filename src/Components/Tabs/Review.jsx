import React from 'react'

export default function Review() {
    const username= localStorage.getItem("username")
    const userage= localStorage.getItem("userage")
    const marrage= localStorage.getItem("marrage")
    const gender= localStorage.getItem("gender")
    const address= localStorage.getItem("address")
    const guardian= localStorage.getItem("guardian")
    const institude= localStorage.getItem("institude")
    const qualification= localStorage.getItem("qualification")
    const passingyear= localStorage.getItem("passingyear")
    const countryvalue= localStorage.getItem("countryvalue")
  return (
    <div   style={{
        width: "1000px",
        height: "400px",
        backgroundColor: "pink",
        boxSizing: "border-box",
        display: "flex",
        flexDirection:"column",
        // marginLeft: "200px",
        padding:"10px",
        borderRadius:"10px",
        boxShadow:"1px 1px ",

      }}>
    
     
    <div style={{display:"flex",gap:"20px"}}>{username}</div>
    <div style={{display:"flex",gap:"20px"}}>{userage}</div>
    <div style={{display:"flex",gap:"20px"}}>{marrage}</div>
    <div style={{display:"flex",gap:"20px"}}>{gender}</div>
    <div style={{display:"flex",gap:"20px"}}>{address}</div>
    <div style={{display:"flex",gap:"20px"}}>{countryvalue}</div>
    <div style={{display:"flex",gap:"20px"}}>{guardian}</div>
    <div style={{display:"flex",gap:"20px"}}>{qualification}</div>
    <div style={{display:"flex",gap:"20px"}}>{institude}</div>
    <div style={{display:"flex",gap:"20px"}}>{passingyear}</div>    
    </div>
  );
}
