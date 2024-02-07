import React from 'react';
import './login.css';

function SignUp() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <input type="password-confirm" name="pc" placeholder="Confirm Password" required="required" />
        <button type="submit" className="btn login-btn">Login</button>
        {/* Plain text link for Sign Up */}
        <p className="signup-text">
          Already have an account? <a href="/auth" className="signup-link">login here!</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;