// import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import Products from './products/Products';
import { Routes ,Route } from 'react-router-dom';





function App() {



  

  return (
    <div className="App">
      <Header />
      <Subheader/>
      < Routes>
        <Route path="/:category?" exact  element={<Products />}>
        

        </Route>
      </ Routes>
     

     
    
    </div>
  );
}

export default App;