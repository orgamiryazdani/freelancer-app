import { useState } from "react"
import SendOtpForm from "./SendOtpForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";

function AuthContainer() {

    const { isPending: isSendingOtp, mutateAsync, data: otpResponse } = useMutation({
        mutationFn: getOtp
    });

    const sendOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync({ phoneNumber })
            setStep(2)
            toast.success(message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };

    const [step, setStep] = useState(2);
    const [phoneNumber, setPhoneNumber] = useState("");

    const renderStep = () => {
        switch (step) {
            case 1: return (
                <SendOtpForm
                    isSendingOtp={isSendingOtp}
                    onSubmit={sendOtpHandler}
                    setStep={setStep}
                    phoneNumber={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            )
            case 2: return (
                <CheckOTPForm
                    phoneNumber={phoneNumber}
                    onBack={() => setStep(s => s - 1)}
                    onReSendOtp={sendOtpHandler}
                    otpResponse={otpResponse}
                />
            )
            default: return null;
        }
    }

    return <div className="w-full sm:max-w-sm">{renderStep()}</div>
}

export default AuthContainer