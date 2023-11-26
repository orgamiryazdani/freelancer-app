import TextField from "../../ui/textField";

import Loading from "../../ui/Loading";

function SendOtpForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {

    return (
        <div>
            <form className="space-y-8" onSubmit={onSubmit}>
                <TextField
                    label="شماره موبایل"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onChange}
                />
                <div>
                    {isSendingOtp ? <Loading /> :
                        <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default SendOtpForm