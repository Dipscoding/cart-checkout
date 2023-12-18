// import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import Products from './products/Products';
import { Routes ,Route, Navigate } from 'react-router-dom';





function App() {



  

  return (
    <div className="App">
      <Header />
      <Subheader/>
      < Routes>
      <Route path="/404" exact="true" element={<h1>Not Found</h1>}>


      </Route>
        <Route path="/:category?" exact="true"  element={<Products />}>
        

        </Route>
        <Route render={() => <Navigate to="/404" />}  />
      </ Routes>
     

     
    
    </div>
  );
}

export default App;