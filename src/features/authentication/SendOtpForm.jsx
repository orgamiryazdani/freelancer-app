import { useState } from "react"
import TextField from "../../ui/textField";

function SendOtpForm() {
    const [phoneNumber, setPhoneNumber] = useState("");

    const sendOtpHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form className="space-y-8" onSubmit={sendOtpHandler}>
                <TextField
                    label="شماره موبایل"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
            </form>
        </div>
    )
}

export default SendOtpForm