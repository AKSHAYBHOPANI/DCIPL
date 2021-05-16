import React, { useState } from 'react';
import '../App.css';
import '../login.css';


function Login() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [IsSignIn, setIsSignIn] = useState(false);

  const EmailValue = (event) => {
  setEmail(event.target.value);
  };

const PasswordValue = (event) => {
  event.preventDefault();
  setPassword(event.target.value);
  };

const onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: Email,
        password: Password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
          setIsSignIn(true);
        }
      })
  }

	return (
		<>
		<main>
            <div>
                <div className="logregister_form">  
                    <h1>Register/Login</h1>
                    <form action="#" method="post">
                        <br></br>
                        <input type="email" name="email" placeholder="E-Mail" name="email" required onChange={EmailValue} value={Email}></input><br></br>
                        <input type="password" name="password" placeholder="Password" name="password" required onChange={PasswordValue} value={Password}></input><br></br>
                    </form>
                </div>
                <div className= "btn-group">
                    <button type="submit" onClick={onSubmitSignIn}>Login</button>
                    
                </div>
            </div>
        </main>
		</>
		)
};

export default Login;