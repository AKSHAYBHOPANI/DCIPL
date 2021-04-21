import React from 'react';
import '../App.css';
import dashboard from './dashboard';

function register() {
	return (
		<>

		<br/ ><br/ ><br/ >
	<form action="./dashboard">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
  <br/ >

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button onChange={<dashboard name="Akshay"/>} type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div></form>
		</>
		)
};

export default register;