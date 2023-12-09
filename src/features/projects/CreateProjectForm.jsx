import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField"
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";

function CreateProjectForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [tags, setTags] = useState([]);
    const [date, setDate] = useState(new Date());
    const { categories } = useCategories()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="عنوان پروژه"
                name="title"
                register={register}
                required validationSchema={{
                    required: "عنوان ضروری است",
                    minLength: {
                        value: 10,
                        message: "طول عنوان نامعتبر است"
                    }
                }}
                errors={errors}
            />
            <TextField
                label="توضیحات"
                name="description"
                register={register}
                required validationSchema={{
                    required: "توضیحات ضروری است",
                    minLength: {
                        value: 10,
                        message: "طول توضیحات نامعتبر است"
                    }
                }}
                errors={errors}
            />
            <TextField
                label="بودجه پروژه"
                name="budget"
                register={register}
                required validationSchema={{
                    required: "بودجه ضروری است",
                }}
                errors={errors}
            />
            <RHFSelect label="دسته بندی" name="category" register={register} options={categories} required />
            <div>
                <label className="mb-2 block text-secondary-700">تگ</label>
                <TagsInput value={tags} onChange={setTags} name="tags" classNames={{}} />
            </div>
            <DatePickerField date={date} setDate={setDate} label="ددلاین" />
            <button type="submit" className="btn btn--primary w-full">تایید</button>
        </form>
    )
}

export default CreateProjectForm;