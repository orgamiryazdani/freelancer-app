import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

function SendOtpForm({ onSubmit, isSendingOtp, register }) {

    return (
        <div>
            <form className="space-y-8" onSubmit={onSubmit}>
                <TextField
                    label="شماره موبایل"
                    name="phoneNumber"
                    register={register}
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