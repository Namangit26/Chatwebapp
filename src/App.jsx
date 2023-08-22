import React from 'react'
import Reg from './Pages/Reg'
import Login from './Pages/Login'
import "./Style.scss"
import Home from './Pages/Home'
import { useContext } from "react";
import { AuthContext } from './context/Authcntx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  const { currentUser } = useContext(AuthContext);
console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/">

          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Reg />} />
    </Route>
    </Routes>
  </BrowserRouter>
   
  )
}
export default App
