// import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import Products from './products/Products';
import {useState} from 'react'




function App() {



  

  return (
    <div className="App">
      <Header />
      <Subheader/>
      <Products />

     
    
    </div>
  );
}

export default App;