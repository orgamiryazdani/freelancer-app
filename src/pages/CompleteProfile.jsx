import { useEffect } from "react"
import CompleteProfileForm from "../features/authentication/CompleteProfileForm"
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";

function CompleteProfile() {
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        if (user) navigate("/", { replace: true })
    }, [user, navigate])

    return (
        <div className="h-screen bg-secondary-0">
            <div className="container xl:max-w-screen-xl">
                <CompleteProfileForm />
            </div>
        </div>
    )
}

export default CompleteProfile