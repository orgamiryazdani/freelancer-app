import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // 1. Load the authenticated user
    const { isLoading, isAuthorized, isAuthenticated, isVerified } = useAuthorize();

    // 2. If there is NO authenticated user, redirect to the /auth
    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate("/auth");
            if (!isVerified && !isLoading) {
                toast.error("پروفایل شما هنوز تایید نشده است");
                navigate("/");
            }
            if (!isAuthorized && !isLoading) navigate("/not-access");
        },
        [isAuthorized, isAuthenticated, isLoading, navigate, isVerified]
    );

    // 3. While loading, show a loading
    if (isLoading)
        return (
            <div className="flex items-center justify-center h-screen bg-secondary-100">
                <Loading />
            </div>
        );

    // 4. If there IS a user, render the app
    if (isAuthorized) return children;
}

export default ProtectedRoute;