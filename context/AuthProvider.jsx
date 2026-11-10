import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const data = {};
  return <AuthContext value={data}>{children}</AuthContext>;
}
