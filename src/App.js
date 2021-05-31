import React, { useState } from 'react';
import './App.css';

//Importing Components 

import Nav from './Components/Nav';
import Main from './Main';
import Footer from './Components/Footer';

function App() {
	const [IsSignIn, setIsSignIn] = useState(false);
	const [User, setUser] = useState("");
	const [Email, setEmail] = useState("");
  return (
    <>
    <Nav IsSignIn={IsSignIn} setIsSignIn={setIsSignIn}/>
    <Main IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} User={User} setUser={setUser} Email={Email} setEmail={setEmail}/>
    <Footer />
    </>
  );
}

export default App;
