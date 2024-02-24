import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Register from './components/Register';
import Singlepage from './components/Singlepage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Products />} />
          <Route path='/:pId' element={<Singlepage />} />
          <Route path='/form' element={<Register />} />
         
        </Routes>
        
      </BrowserRouter>

       
    </div>
  );
}

export default App;


