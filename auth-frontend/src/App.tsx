import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SuccessPage from './components/SuccessPage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>

          <Route element={<ProtectedRoute />}>
            <Route path="/success" element={<SuccessPage />} />
          </Route>

          <Route path='*' element={<Navigate to="/login" replace/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
