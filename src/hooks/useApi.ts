import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

const validateToken = async(token: string) => {
  return {
    user: { id: 3, name: 'José', email: 'jose@email.com' }
  }

  const response = await api.post('/validate', { token })
  return response.data
}

const signin = async(email: string, password: string) => {
  return {
    user: { id: 3, name: 'José', email: 'jose@email.com' },
    token: '123456789'
  }
  
  const response = await api.post('/signin', {email, password})
  return response.data
}

const logout = async () => {
  return { status: true }

  const response = await api.post('/logout')
  return response.data
}

export const useApi = () => ({
  validateToken,
  signin,
  logout
})