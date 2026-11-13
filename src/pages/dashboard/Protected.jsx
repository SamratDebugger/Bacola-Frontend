import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Navigate } from "react-router";

export default function Protected({ children }) {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <span className="loading loading-spinner"></span>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
