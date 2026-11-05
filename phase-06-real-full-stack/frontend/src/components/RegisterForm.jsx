import { useState } from "react";
import { getCsrfCookie, registerUser } from "../api/accountsApi.js";

function RegisterForm() {
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
    <form onSubmit={handleSubmit}>
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
        placeholder="Enter username"
        required
      />

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
        placeholder="Enter Email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        value={formData.password}
        type="password"
        id="password"
        onChange={(event) =>
          setFormData({
            ...formData,
            password: event.target.value,
          })
        }
        placeholder="Enter Password"
        required
      />

      {success && <p>{success}</p>}
      {error && <p>{error}</p>}

      <button type="submit">Sign up</button>
    </form>
  );
}

export default RegisterForm;
