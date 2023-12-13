import { useForm } from "react-hook-form"
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { createProposal, isCreating } = useCreateProposal()

    const onSubmit = (data) => {
        createProposal(
            { ...data, projectId },
            {
                onSuccess: () => {
                    onClose();
                },
            }
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <TextField
                    label="توضیحات"
                    name="description"
                    register={register}
                    errors={errors}
                    required
                    validationSchema={{
                        required: "توضیحات ضروری است",
                        minLength: {
                            value: 10,
                            message: "حداقل 10 کاراکتر را وارد کنید",
                        },
                    }}
                />
                <TextField
                    label="قیمت"
                    type="number"
                    name="price"
                    register={register}
                    errors={errors}
                    required
                    validationSchema={{
                        required: "قیمت ضروری است",
                    }}
                />
                <TextField
                    label="مدت زمان"
                    name="duration"
                    type="number"
                    register={register}
                    errors={errors}
                    required
                    validationSchema={{
                        required: "مدت زمان ضروری است",
                    }}
                />
                <div className="!mt-8">
                    {isCreating ? (
                        <Loading />
                    ) : (
                        <button className="btn btn--primary w-full" type="submit">
                            تایید
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default CreateProposal