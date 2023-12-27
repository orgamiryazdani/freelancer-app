import { useForm } from "react-hook-form"
import { useQueryClient } from "@tanstack/react-query";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
    {
        label: "رد شده",
        value: 0,
    },
    {
        label: "در انتظار تایید",
        value: 1,
    },
    {
        label: "تایید شده",
        value: 2,
    },
]

function ChangeUserStatus({ userId, onClose }) {
    const { register, handleSubmit } = useForm();
    const queryClient = useQueryClient();
    const { changeUserStatus, isUpdating } = useChangeUserStatus();

    const onSubmit = (data) => {
        changeUserStatus(
            { userId, data },
            {
                onSuccess: () => {
                    onClose();
                    queryClient.invalidateQueries({ queryKey: ["users"] })
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RHFSelect
                    name="status"
                    label="تغییر وضغیت"
                    register={register}
                    required
                    options={options}
                />
                <div className="!mt-8">
                    {
                        isUpdating ? <Loading /> :
                            <button className="btn btn--primary w-full" type="submit">تایید</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default ChangeUserStatus