import { Box, Button } from '@mui/material'
import React from 'react'

const BottomNavigate = ({details, setDetails, steps}) => {
  let currentStep = steps.find(step => step.id === details.currentStepId)

  const handleBack = () => {
    let newDetails = {...details, currentStepId: details.currentStepId - 1}
    setDetails(newDetails)
    localStorage.setItem("user_details", JSON.stringify(newDetails))
  } 

  const handleNext = () => {
    let newDetails = {...details, currentStepId: details.currentStepId + 1}
    setDetails(newDetails)
    localStorage.setItem("user_details", JSON.stringify(newDetails))
  } 

  return (
   <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Button color="inherit" disabled={details.currentStepId === 1 || !currentStep.validNow} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      {currentStep.skippable && (
        <Button color="inherit" onClick={handleNext} sx={{ mr: 1 }}>
          Skip
        </Button>
      )}
      <Button onClick={handleNext}>
        {details.currentStepId === steps.length ? 'Finish' : 'Next'}
      </Button>
    </Box>
  )
}

export default BottomNavigate