import { useState } from "react";

function PasswordField({
  id,
  value,
  onChange,
  autoComplete,
  placeholder,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="auth-field">
      <label htmlFor={id}>Password</label>
      <div className="password-input-wrapper">
        <input
          value={value}
          type={isPasswordVisible ? "text" : "password"}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
        />
        <button
          type="button"
          className="password-visibility-toggle"
          onClick={() => setIsPasswordVisible((visible) => !visible)}
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          aria-pressed={isPasswordVisible}
          aria-controls={id}
        >
          {isPasswordVisible ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3l18 18" />
              <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
              <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5.5 0 9 7 9 7a14.8 14.8 0 0 1-3.1 3.8" />
              <path d="M6.2 6.2C3.9 7.7 3 12 3 12s3.5 7 9 7a10 10 0 0 0 3-.5" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordField;
