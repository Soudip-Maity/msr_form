import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import PersonalInfo from '../components/PersonalInfo'
import Complete from '../components/Complete'
import FamilyInfo from '../components/FamilyInfo'
import ContactInfo from '../components/ContactInfo'
import EducationInfo from '../components/EducationInfo'
import EmploymentInfo from '../components/EmploymentInfo'
import AddressAndIdentityInfo from '../components/AddressAndIdentityInfo'

const initialState = {
  personalInfo: {name: "", dob: "", gender: "male", isMarried: false, photo: ""},
  familyInfo: {husbandName: "", wifeName: "", children: []},
  contactInfo: {country: "", state: "", city: "", phone: ""},
  educationInfo: {qualification: "", yearOfPassing: "", institutionName: ""},
  employmentInfo: {status: "", companyName: "", income: ""},
  addressAndIdentityInfo: {address: "", proofOfIdentity: "", concent: false, cardNumber: ""},
  currentStepId: 1
}

const Home = () => {
  const [details, setDetails] = useState(initialState)

  // get user details on load
  useEffect(() => {
    let user_details = localStorage.getItem("user_details")
    if(user_details && JSON.parse(user_details)){
      setDetails(JSON.parse(user_details))
    }
  }, [])
  
  
  return (
    <Box>
      {details.currentStepId === 7 ?  
        <Complete details={details} />
        : 
        <Layout details={details} setDetails={setDetails}>
          {
            details.currentStepId === 1 ? <PersonalInfo details={details} /> 
            : details.currentStepId === 2 ? <FamilyInfo details={details} /> 
            : details.currentStepId === 3 ? <ContactInfo details={details} /> 
            : details.currentStepId === 4 ? <EducationInfo details={details} /> 
            : details.currentStepId === 5 ? <EmploymentInfo details={details} /> 
            : details.currentStepId === 6 ? <AddressAndIdentityInfo details={details} /> : <></>
          }
        </Layout>
      }

    </Box>
  )
}

export default Home