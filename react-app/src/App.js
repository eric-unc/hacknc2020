import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Form />
    </div>
  );
}
