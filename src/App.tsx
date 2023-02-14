import { Routes, Route, Link } from 'react-router-dom'
import { Home, Private } from './pages/index'
import './App.css'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { AuthContext } from './contexts/Auth/AuthContext'
import { useCallback, useContext } from 'react'

function App() {
  const auth = useContext(AuthContext)

  const handleLogout = useCallback(async () => {
    await auth.signout()
  }, [auth])

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página privada</Link>
          {auth.user && <a href='/' onClick={handleLogout}>Sair</a>}
        </nav>
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth element={<Private />} />} />
      </Routes>
    </div>
  )
}

export default App
