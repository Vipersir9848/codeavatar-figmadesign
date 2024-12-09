import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";

import OtpInputBox from "./otpinput/OtpInputBox";

import Row from "../../layout/Row";
import Col from "../../layout/Col";
import Text from "../ui/text";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [email, setEmail] = useState(""); // Changed to email state
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState(""); // Store OTP input
  const [resendClicked, setResendClicked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Handle email change
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      alert("Invalid Email Address");
      return;
    }
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    if (otp) {
      navigate("/multistep-form");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (showOtpInput && otp) {
      // Call onOtpSubmit only if OTP input is shown and OTP is entered
      onOtpSubmit(otp);
    }
  };

  return (
    <div className="h-full w-full px-5 md:px-0 pt-[10%] md:pl-[12%] flex justify-center sm:justify-start">
      <Col justify="between pb-10">
        <div>
          <div>
            <img src={logo} alt="logo" className="sm:w-[202px] w-[150px]" />
          </div>

          <Col className="gap-y-2 sm:mt-20 mt-10 sm:mb-12 mb-5">
            <Text size="xl" weight="bold" className="sm:text-[32px]">
              {showOtpInput ? "Verify your Email" : "Enter Your Email Address"}
            </Text>
            {showOtpInput && (
              <Text
                size="sm"
                weight="normal"
                color="gray"
                className="sm:text-base"
              >
                Please enter the 6 digit code we just sent to {email}
              </Text>
            )}
          </Col>

          <form onSubmit={handleEmailSubmit}>
            <Col className="gap-y-6">
              {showOtpInput ? (
                <div>
                  <OtpInputBox length={6} onOtpSubmit={setOtp} />
                </div>
              ) : (
                <input
                  type="email"
                  value={email} // Bind email state here
                  onChange={handleEmailChange} // Handle input change
                  placeholder="Enter Email Address"
                  className="lg:w-[50vh] w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}

              <Col className="gap-y-2">
                <Button
                  type="submit"
                  text={showOtpInput ? "Verify" : "Send OTP"}
                  onClick={showOtpInput ? handleClick : undefined}
                  className="sm:py-3.5 sm:w-[50vh] w-full"
                />
                {showOtpInput &&
                  (resendClicked ? (
                    <Text size="base" weight="normal" color="gray">
                      Wait 1:39 seconds before requesting a new code.
                    </Text>
                  ) : (
                    <Row>
                      <Text size="base" weight="normal" color="gray">
                        Didn’t receive a code?
                      </Text>
                      <div onClick={() => setResendClicked(true)}>
                        <Text size="base" weight="normal" color="blue">
                          &nbsp;Resend Code
                        </Text>
                      </div>
                    </Row>
                  ))}
              </Col>
            </Col>
          </form>
        </div>

        <div className="flex xl:flex-row flex-col">
          <Text size="sm" weight="normal" className="sm:text-base">
            By continuing, you’re agreeing to Nobody’s
          </Text>
          <Text size="sm" weight="normal" className="sm:text-base" color="blue">
            &nbsp;Terms of Service, Privacy Policy and Cookie Policy.
          </Text>
        </div>
      </Col>
    </div>
  );
};

export default Signup;
