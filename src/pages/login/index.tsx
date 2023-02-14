import { ChangeEvent, MouseEventHandler, useCallback, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Login = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleLogin = async () => {
    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value

    if (email && password) {
      const isLogged = await auth.signin(email, password)

      if (isLogged) {
        navigate('/')
      } else {
        alert('Erro ao conectar a conta!')
      }
    }
  }

  return (
    <div>
      <h2>Página Fechada</h2>

      <input type="email" ref={emailInputRef} placeholder="Digite seu email" />
      <input type="password" ref={passwordInputRef} placeholder="Digite sua senha" />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}