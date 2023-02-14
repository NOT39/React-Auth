import { useContext } from "react"
import { Login } from "../../pages"
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({ element }: { element: JSX.Element}) => {
  const auth = useContext(AuthContext)
  
  if(!auth.user) return <Login />
  
  return element
}