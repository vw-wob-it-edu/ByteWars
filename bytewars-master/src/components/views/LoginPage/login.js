import React from 'react';
import './login.css';

function AuthPage() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" className="btn login-btn">Login</button>
        {/* Plain text link for Sign Up */}
        <p className="signup-text">
          No account yet? <a href="/sign-up" className="signup-link">Register here!</a>
        </p>
      </form>
    </div>
  );
}

export default AuthPage;