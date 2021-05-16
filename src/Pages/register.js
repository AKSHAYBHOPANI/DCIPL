import React, { useState } from 'react';
import '../App.css';
import Dashboard from './dashboard';


function Register() {
  
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [IsSignIn, setIsSignIn] = useState(false);

  const NameValue = (event) => {
  event.preventDefault();
  setUser(event.target.value);
  };

  const EmailValue = (event) => {
  setEmail(event.target.value);
  };

const PasswordValue = (event) => {
  event.preventDefault();
  setPassword(event.target.value);
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    onSubmitSignIn()
  }

  const onSubmitSignIn = () => {
    fetch('http://localhost:3011/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: Email,
        password: Password,
        name: User
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.ok) {
          console.log(User)
          setIsSignIn(true);
          
          /*this.props.loadUser(user)
          this.props.onRouteChange('home');*/
        } else {
          alert("Email Already Exists")
        }
      })
  }


	return (
		<>
{IsSignIn ? (
  <>
  <br/>
        <Dashboard User={User}/>
</>
      ) : (
        <>
        <main>
 <div>
                <div className="logregister_form">  
                    <h1>Register</h1>
                    <form action="#" method="post">
                        <br></br>
                        <input type="text" name="name" placeholder="Name" required onChange={NameValue} value={User}></input><br></br>
                        <input type="email" name="email" placeholder="E-Mail" required onChange={EmailValue} value={Email}></input><br></br>
                        <input type="password" name="password" placeholder="Password"  required onChange={PasswordValue} value={Password}></input><br></br>
                    </form>
                </div>
                <div className= "btn-group">
                    <button type="submit" onClick={OnSubmit}>Register</button>
                    
                </div>
            </div>
  </main>
</>
      )}


		
		</>
		)
};

export default Register;