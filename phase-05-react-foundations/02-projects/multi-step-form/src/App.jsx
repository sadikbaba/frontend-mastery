import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails.jsx";
import DeveloperProfile from "./components/DeveloperProfile.jsx";
import JobPreferences from "./components/JobPreferences.jsx";
import ReviewStep from "./components/ReviewStep.jsx";
import Dashboard from "./components/Dashboard.jsx";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    stack: "",
    preferredRole: "",
    workPreference: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  function nextStep() {
    setCurrentStep((currentStep) => currentStep + 1);
  }
  function backStep() {
    setCurrentStep((currentStep) => currentStep - 1);
  }
  return (
    <>
      {currentStep === 1 && (
        <PersonalDetails
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
        />
      )}

      {currentStep === 2 && (
        <DeveloperProfile
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={backStep}
        />
      )}

      {currentStep === 3 && (
        <JobPreferences
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={backStep}
        />
      )}

      {currentStep === 4 && (
        <ReviewStep formData={formData} onNext={nextStep} onBack={backStep} />
      )}

      {currentStep === 5 && <Dashboard formData={formData} />}
    </>
  );
}

export default App;
