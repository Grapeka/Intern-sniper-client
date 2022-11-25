import { createContext } from "react";

export const AuthContext = createContext<{
  auth: {
    email: string | null;
    profilePicture: string | null;
    role: string | null;
  } | null,
  token: string | null,
  setToken: React.Dispatch<React.SetStateAction<string | null>>
} | null>(null)