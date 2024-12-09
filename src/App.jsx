

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./screens/SignupScreen";
import MultiStepScreen from "./screens/MultiStepFormScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/multistep-form" element={<MultiStepScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
