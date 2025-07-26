import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'

const ProgressBar = ({details, steps}) => {
  return (
    <Box pb={2}>
      <Stepper activeStep={details.currentStepId - 1}>
        {steps.map((step, index) => {
          const stepProps = {completed: true};
         
          if (step.id >= details.currentStepId) {
            stepProps.completed = false;
          }          

          return (
            <Step key={index} {...stepProps}>
              <StepLabel optional={step.skippable}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  )
}

export default ProgressBar