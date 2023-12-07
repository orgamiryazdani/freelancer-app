import { useState } from "react"
import SendOtpForm from "./SendOtpForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

function AuthContainer() {

    const { isPending: isSendingOtp, mutateAsync, data: otpResponse } = useMutation({
        mutationFn: getOtp
    });

    const sendOtpHandler = async (data) => {
        try {
            const { message } = await mutateAsync(data)
            setStep(2)
            toast.success(message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };

    const [step, setStep] = useState(2);
    const { handleSubmit, register, getValues } = useForm();

    const renderStep = () => {
        switch (step) {
            case 1: return (
                <SendOtpForm
                    isSendingOtp={isSendingOtp}
                    onSubmit={handleSubmit(sendOtpHandler)}
                    setStep={setStep}
                    register={register}
                />
            )
            case 2: return (
                <CheckOTPForm
                    phoneNumber={getValues("phoneNumber")}
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