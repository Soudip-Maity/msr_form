import { Box, Container } from '@mui/material'
import React from 'react'
import ProgressBar from './ProgressBar'
import BottomNavigate from './BottomNavigate'

const Layout = ({children, details, setDetails}) => {
  
  const checkValid = (step) => {
    return true
  }

  const steps = [
    {id: 1, label: "Personal Info", skippable: false, validNow: checkValid("personalInfo")},
    {id: 2, label: "Family Info", skippable: false, validNow: checkValid("familyInfo")},
    {id: 3, label: "Contact Info", skippable: false, validNow: checkValid("contactInfo")},
    {id: 4, label: "Education Info", skippable: true, validNow: checkValid("educationInfo")},
    {id: 5, label: "Employment Info", skippable: true, validNow: checkValid("employmentInfo")},
    {id: 6, label: "Address and Identity", skippable: false, validNow: checkValid("addressAndIdentityInfo")},
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