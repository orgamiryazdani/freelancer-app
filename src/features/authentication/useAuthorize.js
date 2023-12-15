import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
    const { isLoading, user } = useUser();
    const { pathname } = useLocation();

    const roles = {
        admin: "ADMIN",
        owner: "OWNER",
        freelancer: "FREELANCER",
      };
    
      let isAuthenticated = false;
      if (user) isAuthenticated = true;
    
      let isAuthorized = false;
      const desiredRole = pathname.split("/")[1];
    
      if (Object.keys(roles).includes(desiredRole)) {
        if (user && user.role === roles[desiredRole]) isAuthorized = true;
      }
    
      return { isLoading, isAuthorized, isAuthenticated, user };
}