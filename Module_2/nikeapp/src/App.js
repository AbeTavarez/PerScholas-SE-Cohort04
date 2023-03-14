import { useState } from 'react';
import { nikeData } from "./data/nikeData";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';

import './App.css';

function App() {
  const [data, setData] = useState(nikeData);
  const [cart, setCart] = useState([]);

  return (
    <div className="">
     <Header shoppingCart={cart}/>
     <ProductsList products={data} addToCart={setCart} cart={cart}/>
     <Footer/>
    </div>
  );
}

export default App;
