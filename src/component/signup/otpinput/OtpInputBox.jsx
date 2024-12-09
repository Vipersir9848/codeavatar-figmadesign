import React, { useEffect, useRef, useState } from "react";

const OtpInputBox = ({ length = 6, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];

    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger

    const combinedOtp = newOtp.join("");

    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(0, 1);

    

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <React.Fragment key={index}>
            <input
              className="border-2 text-[#333333] focus:border-blue-500  sm:w-12 sm:h-12 w-10 h-10 text-center rounded-md mx-3.5"
              key={index}
              ref={(input) => (inputRefs.current[index] = input)}
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
            {(index + 1) % 3 === 0 && index + 1 !== otp.length && (
              <span className="mx-2 text-3xl">-</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OtpInputBox;
