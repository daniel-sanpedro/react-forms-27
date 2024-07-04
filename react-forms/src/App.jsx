import React, { useState } from "react";
import Authenticate from "./components/authenticate";
import SignUpForm from "./components/signUpForm";
import "./App.css";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}
