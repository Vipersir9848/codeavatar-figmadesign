import React, { useEffect, useRef, useState } from "react";
import Row from "../../layout/Row";
import Col from "../../layout/Col";


const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      //Current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    // create object each for each of elements
    const stepsState = steps.map((step, index) => {
      // Return the new step object with the properties
      return {
        description: step,
        completed: false,
        highlighted: index === 0, // Highlight the first step
        selected: index === 0, // Select the first step
      };
    });

    stepRef.current = stepsState;

    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {

    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <Row justify="between" align="center">
          <Col className="relative text-teal-600" align="center">
            <Row
              className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 py-3 ${
                step.selected
                  ? "bg-green-600 text-white font-bold border border-green-600"
                  : ""
              }`}
              align="center"
              justify="center"
            >
              {/* Displaying number */}
              {step.completed ? (
                <span className="text-whtie font-bold text-xl">&#10003;</span>
              ) : (
                index + 1
              )}
            </Row>

            <div className="lg:block hidden absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
              {step.description}
            </div>

            {/* Display line */}
          </Col>
        </Row>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-green-600" : "border-gray-300"
          }`}
        ></div>
      </div>
    );
  });

  return (
    <Row className="p-4" justify="between" align="center">
      {displaySteps}
    </Row>
  );
};

export default Stepper;
