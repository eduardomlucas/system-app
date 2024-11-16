import Menu from "@/components/menu";
import { Navigate } from "react-router-dom";

type AuthGuardProps = {
    children: React.ReactNode;
};

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {

    const isAuthenticated = () => {
        const token = localStorage.getItem('authToken');
        return !!token; 
    };

    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
  
    return <Menu>{children}</Menu>;
  };
  
  export default AuthGuard;