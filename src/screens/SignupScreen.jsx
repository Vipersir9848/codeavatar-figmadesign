import React, { useState } from "react";
import { SplitLayout } from "../layout/SplitLayout";
import ImageBackground from "../component/signup/layoutcards/LayoutCards";
import Signup from "../component/signup/index";

const SignupScreen = () => {
  
  return (
    <div>
      <SplitLayout >
        <ImageBackground />
        <Signup />
      </SplitLayout>
    </div>
  );
};

export default SignupScreen;
