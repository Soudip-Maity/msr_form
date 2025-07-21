import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Personal_info from "../Components/Tabs/Personal_info";
import Contact_info from "../Components/Tabs/Contact_info";
import Family_info from "../Components/Tabs/Family_info";
import Employment_info from "../Components/Tabs/Employment_info";
import Education_info from "../Components/Tabs/Education_info";
import Address_doc from "../Components/Tabs/Address_doc";
import Review from "../Components/Tabs/Review";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const steps = [
  "Personal Info",
  "Family Info",
  "Contact Info",
  "Education Info",
  "Employment Info",
  "Address & documnts",
  "Review"
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [details, setdetails]= React.useState({})

  

  const isStepOptional = (step) => {
    return step === 3 || step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }; 

  const handleReset = () => {
    localStorage.clear();
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", boxSizing: "border-box" }}>
      <Stepper activeStep={activeStep} sx={{paddingBottom:"40px"}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 ? (
        <>
          <Personal_info />
        </>
      ) : activeStep === 1 ? (
        <>
          <Family_info />
        </>
      ) : activeStep === 2 ? (
        <>
          <Contact_info />
        </>
      ) : activeStep === 3 ? (
        <>
          <Education_info />
        </>
      ) : activeStep === 4 ? (
        <>
          <Employment_info />
        </>
      ) : activeStep === 5 ? (
        <>
          <Address_doc />
        </>
      ) : activeStep === 6? (
        <>
          <Review />
        </>
      ) :null}

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} variant="contained+" color="error">
              <RestartAltIcon />
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="contained"
            >
              <ArrowBackIosIcon />
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext} variant="contained">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </React.Fragment>
      )}

    </Box>
  );
}
