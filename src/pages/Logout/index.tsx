import {useContext, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {AuthContext} from "../../providers/authProvider"

function Logout() {
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  
  const setToken = new Promise((resolve, reject) => {
    resolve(context?.setToken(''))
  })

  useEffect(() => {
    setToken.then(_ => navigate('..'))
  }, [])

  return (
    <></>
  )
}

export default Logout
