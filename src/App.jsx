import "./App.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import AddRecipe from "./components/Form/AddRecipe";
import { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";
import { ApiContextProvider } from "./context/ApiContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";
import Profile from "./components/Profile/Profile";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <AuthProvider>
      <Router>
        <div className={theme}>
          <Header />
          <ApiContextProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/add-recipe"
                element={<PrivateRoute element={<AddRecipe />} />}
              />
              <Route
                path="/profile"
                element={<PrivateRoute element={<Profile />} />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </ApiContextProvider>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
