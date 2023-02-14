import axios from "axios"

const api = axios.create({
	baseURL: import.meta.env.VITE_REACT_APP_API_URL,
})

const validateToken = async (token: string) => {
	const response = await api.post("/validate", { token })
	return response.data
}

const signin = async (email: string, password: string) => {
	const response = await api.post("/signin", { email, password })
	return response.data
}

const logout = async () => {
	const response = await api.post("/logout")
	return response.data
}

export const useApi = () => ({
	validateToken,
	signin,
	logout,
})
