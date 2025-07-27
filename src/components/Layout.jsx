import { Box, Container } from '@mui/material'
import React from 'react'
import ProgressBar from './ProgressBar'
import BottomNavigate from './BottomNavigate'

const Layout = ({children, details, setDetails}) => {
  
  const checkValid = (step) => {
    // return true
    if(step === "personalInfo"){
      let { personalInfo } = details
      // if (!personalInfo.name) return false 
      // if (!personalInfo.dob) return false 
      // .... add for others
    }else if(step === "familyInfo"){
      let { familyInfo } = details
    }

    return true

  }


  const checkShow = (step) => {

    if(step === "familyInfo"){
      let { personalInfo } = details
      if (personalInfo.isMarried){
        return true
      }else{
        return false
      }
    }

    return true
  }

  const steps = [
    {id: 1, label: "Personal Info", skippable: false, show: checkShow("personalInfo"), validNow: checkValid("personalInfo")},
    {id: 2, label: "Family Info", skippable: false, show: checkShow("familyInfo"), validNow: checkValid("familyInfo")},
    {id: 3, label: "Contact Info", skippable: false, show: checkShow("contactInfo"), validNow: checkValid("contactInfo")},
    {id: 4, label: "Education Info", skippable: true, show: checkShow("educationInfo"), validNow: checkValid("educationInfo")},
    {id: 5, label: "Employment Info", skippable: true, show: checkShow("employmentInfo"), validNow: checkValid("employmentInfo")},
    {id: 6, label: "Address and Identity", skippable: false, show: checkShow("addressAndIdentityInfo"), validNow: checkValid("addressAndIdentityInfo")},
  ]
  
  return (
    <Container maxWidth="lg">
      <Box width={"100%"} py={8}>

        <ProgressBar details={details} steps={steps} />

        <Box bgcolor={"white"} borderRadius={"16px"} p={4}>
          {children}
        </Box>
        <BottomNavigate details={details} setDetails={setDetails} steps={steps} />
      </Box>
    </Container>
  )
}

export default Layout