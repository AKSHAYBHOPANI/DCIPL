import React, { useState } from 'react';
import './App.css';

//Importing Components 

import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Main from './Main';

function App() {
	const [IsSignIn, setIsSignIn] = useState(false);
  return (
    <>
    <Nav IsSignIn={IsSignIn} setIsSignIn={setIsSignIn}/>
    <Main IsSignIn={IsSignIn} setIsSignIn={setIsSignIn}/>
    <Footer />
    </>
  );
}

export default App;
