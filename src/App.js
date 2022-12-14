import React from 'react';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import Login from './Componentes/Login/Login';
import './App.css';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Componentes/Helper/ProtectedRoute';
import User from './Componentes/User/User';
import Photo from './Componentes/Photo/Photo';
import UserProfile from './Componentes/User/UserProfile';
import Notfound from './Componentes/Notfound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
