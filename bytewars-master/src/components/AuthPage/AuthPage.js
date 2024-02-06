import React from 'react';
import './AuthPage.css'; 

function AuthPage() {



  return (
    <div class="login">
	<h1>Login</h1>
    <form method="post">
    	<input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn ">Login</button>
    </form>
</div>
  );
}

export default AuthPage;
