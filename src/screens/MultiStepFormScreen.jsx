import React, { useState } from "react";
import Stepper from "../component/multistepform/Stepper";
import StepperControl from "../component/multistepform/StepperControl";
import Form from "../component/multistepform/form/Form";

const MultiStepFormScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Business Type",
    "Business Details",
    "Authorized Representatived",
    "Business Owners",
    "Company Directors",
    "Supoort Information",
    "Add Details",
    "Complete Registration",
  ];

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds

    newStep > 0 && newStep < +steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="w-[95vw] md:w-[70vw] lg:[85vw] mx-auto rounded-2xl pb-2">
      {/* Stepper */}
      <div className="mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* form */}

      <Form />

      {/* navigation controller */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
};

export default MultiStepFormScreen;
