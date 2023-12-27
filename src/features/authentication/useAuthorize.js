import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  let isAuthorized = false;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };


  const desiredRole = pathname.split("/")[1];

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  return { isLoading, isAuthorized, isAuthenticated, user, isVerified };
}