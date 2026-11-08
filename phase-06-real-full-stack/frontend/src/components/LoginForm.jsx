import { useState } from "react";
import { getCsrfCookie, loginUser } from "../api/accountsApi.js";
import PasswordField from "./PasswordField.jsx";
import "./css/AuthForms.css";

function LoginForm({ onLoginSuccess, onAuthView }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);
    try {
      await getCsrfCookie();
      await loginUser(formData);
      await onLoginSuccess();
      setSuccess("Login successful");
      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-heading">
          <span className="auth-eyebrow">APPLICATION TRACKER</span>
          <h1>Welcome back</h1>
          <p>Sign in to keep your job search moving.</p>
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
              placeholder="Enter username or email"
              autoComplete="username"
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
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          {success && <p className="auth-message auth-success" role="status">{success}</p>}
          {error && <p className="auth-message auth-error" role="alert">{error}</p>}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-switch">
          Don&apos;t have an account?{" "}
          <button type="button" onClick={onAuthView}>
            Register
          </button>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
