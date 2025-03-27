// src/Pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function Login({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true); // Gère l'état entre connexion et inscription
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Gestion de la checkbox "Se souvenir"
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const validateFields = () => {
    // Simple validation pour le mode connexion
    if (isLogin) {
      const validEmail = email === "test@test.com";
      const validPassword = password === "password";
      setEmailError(!validEmail);
      setPasswordError(!validPassword);
      return validEmail && validPassword;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFields()) {
      setIsAuthenticated(true);
      navigate("/"); // Redirection après connexion
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2>{isLogin ? "Se connecter" : "S'inscrire"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required={!isLogin}
            />
            {emailError && isLogin && (
              <span className="error-message">Email incorrect</span>
            )}
          </div>
          <div className="input-group">
            <span className="icon">
              <ion-icon name="lock-open"></ion-icon>
            </span>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handlePasswordChange}
              required={!isLogin}
            />
            {passwordError && isLogin && (
              <span className="error-message">Mot de passe incorrect</span>
            )}
          </div>

          {isLogin && (
            <div className="login-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberMe">Se souvenir ?</label>
              </div>
              <a href="#" className="forgot-password">
                Mot de passe oublié ?
              </a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Se connecter" : "S'inscrire"}
          </button>
        </form>

        <div className="toggle-action">
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Pas encore membre ? S'inscrire"
              : "Déjà membre ? Se connecter"}
          </p>
        </div>
      </div>

      <div className="ellipse one"></div>
      <div className="ellipse two"></div>
      <div className="ellipse three"></div>
    </div>
  );
}

export default Login;
