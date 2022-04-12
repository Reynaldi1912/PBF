import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup} from '@chakra-ui/react'
import Menu from './Menu/Menu';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import firebase from './firebase'
import Profile from './components/Profile/Profile'
import Keranjang from './Menu/Keranjang';
import Home from './components/Home/Home';





function App() {
  return (
    <div>
      <Header/>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Menu />} />
              <Route path="/about" element={<Profile />} />
              <Route path="/checkout" element={<Keranjang />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
