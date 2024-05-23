import React, { useState } from 'react';
import Forgotpwd from "./ForgotPwd/Forgotpwd";
import NewPwd from "./NewPwd/NewPwd";
import OTPGenerate from "./OTPGenerator/OTPGenerate";
import './ForgotPassword.css'; // Make sure to import the CSS

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // Start with the first step

    const handleForgotPwdComplete = () => {
        setStep(2); // Move to OTP generation
    };

    const handleOTPComplete = () => {
        setStep(3); // Move to new password
    };

    return (
        <div className="slide-container">
            <div className={`slide-content ${step === 1 ? 'slide-active' : 'slide-exit'}`}>
                <Forgotpwd onComplete={handleForgotPwdComplete} />
            </div>
            <div className={`slide-content ${step === 2 ? 'slide-active' : step > 2 ? 'slide-exit' : 'slide-enter'}`}>
                <OTPGenerate onComplete={handleOTPComplete} />
            </div>
            <div className={`slide-content ${step === 3 ? 'slide-active' : 'slide-enter'}`}>
                <NewPwd />
            </div>
        </div>
    );
}

export default ForgotPassword;