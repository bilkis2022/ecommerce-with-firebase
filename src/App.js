
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product_details from './pages/Product_details';

function App() {
  return (
    <div className="App">
      
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product-details/:id' element={<Product_details />} />
      </Routes>

    </div>
  );
}

export default App;
