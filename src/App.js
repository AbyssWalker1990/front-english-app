import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './feature/auth/Login'
import Welcome from './feature/auth/Welcome'
import Register from './feature/auth/Register'
import Test from './feature/auth/Test'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  )
}

export default App
