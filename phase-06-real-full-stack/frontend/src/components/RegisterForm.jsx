import { useState } from "react";
import { getCsrfCookie, registerUser } from "../api/accountsApi.js";
import PasswordField from "./PasswordField.jsx";
import "./css/AuthForms.css";

function RegisterForm({ onAuthView }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      await getCsrfCookie();
      await registerUser(formData);
      setSuccess("Registration successful. You can now log in.");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-heading">
          <span className="auth-eyebrow">APPLICATION TRACKER</span>
          <h1>Create your account</h1>
          <p>Set up an account to organize your job applications.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="username">Username</label>
            <input
              value={formData.username}
              type="text"
              id="username"
              onChange={(event) =>
                setFormData({
                  ...formData,
                  username: event.target.value,
                })
              }
              placeholder="Choose a username"
              autoComplete="username"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              value={formData.email}
              type="email"
              id="email"
              onChange={(event) =>
                setFormData({
                  ...formData,
                  email: event.target.value,
                })
              }
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <PasswordField
            id="password"
            value={formData.password}
            onChange={(event) =>
              setFormData({
                ...formData,
                password: event.target.value,
              })
            }
            placeholder="Create a password"
            autoComplete="new-password"
          />

          {success && <p className="auth-message auth-success" role="status">{success}</p>}
          {error && <p className="auth-message auth-error" role="alert">{error}</p>}

          <button type="submit" className="auth-submit">
            Register
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <button type="button" onClick={onAuthView}>
            Login
          </button>
        </p>
      </div>
    </section>
  );
}

export default RegisterForm;
