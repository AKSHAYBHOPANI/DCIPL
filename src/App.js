import React, { useState } from "react";
import "./App.css";

//Importing Components

import Nav from "./Components/Nav";
import Main from "./Main";
import Footer from "./Components/Footer";
import Loading from './Loading';
function App() {
  const [Profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    IsSignIn: "",
    IsonBoarding: "",
    IsSubscribed: true,
  });

  return (
    <>
      <Nav Profile={Profile} setProfile={setProfile} />
      <Main Profile={Profile} setProfile={setProfile} />
        <Loading/>
      <Footer />
    </>
  );
}

export default App;
