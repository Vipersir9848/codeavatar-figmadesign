import React from "react";
import Row from "../../layout/Row";
import Button from "../ui/button/Button";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    // <div>
    <div className="container mt-4 mb-8 flex justify-around">
      {/* back button */}
      <Button
        text="Previous"
        className={`py-3.5 bg-transparent border border-black ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        } `}
        color="black"
        onClick={() => handleClick()}
      />

      {/* next button */}
      <Button
        text={currentStep === steps.length - 1 ? "confirm" : "Next"}
        className="py-3.5"
        onClick={() => handleClick("next")}
      />
    </div>
    // </div>
  );
};

export default StepperControl;
