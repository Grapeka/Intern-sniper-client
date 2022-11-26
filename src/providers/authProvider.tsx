import User from '../types/User'
import { createContext } from "react";

export const AuthContext = createContext<{
  auth: User | null,
  token: string | null,
  setToken: React.Dispatch<React.SetStateAction<string | null>>
} | null>(null)
