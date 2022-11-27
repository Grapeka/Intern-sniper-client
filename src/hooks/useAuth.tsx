import { useEffect, useState } from "react";
import User from '../types/User'

function useAuth(): [User | null, string | null, React.Dispatch<React.SetStateAction<string | null>>] {

  const getToken = () => {
    const token = sessionStorage.getItem('token')
    return token
  }
  
  const [auth, setAuth] = useState<User | null>(null)
  const [token, setToken] = useState(getToken())

  useEffect(() => {
    console.log(token)
    if(token === null) return
    fetch(import.meta.env.VITE_BACKEND_URL + '/auth/me', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => {
        if(! res.ok) {
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('id')
          sessionStorage.removeItem('email')
          sessionStorage.removeItem('profilePicture')
          sessionStorage.removeItem('role')
          setAuth(null)
          return 
        }
        res.json().then(data => {
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('id', data.id)
          sessionStorage.setItem('email', data.email)
          sessionStorage.setItem('profilePicture', data.profilePicture)
          sessionStorage.setItem('role', data.role)
          setAuth(data)
        })
      })
      .catch(err => console.error(err))
  }, [token])
  
  return [auth, token, setToken]
}

export default useAuth;
