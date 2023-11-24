import CheckOTPForm from "../features/authentication/CheckOTPForm"
import SendOtpForm from "../features/authentication/SendOtpForm"

function Auth() {
    return (
        <div className="flex justify-center pt-10">
            <div className="w-full sm:max-w-sm">
                <SendOtpForm />
                <CheckOTPForm />
            </div>
        </div>
    )
}

export default Auth