import { useState, createContext } from 'react';
import { nikeData } from "./data/nikeData";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';

import './App.css';

// 1. Creating the context
export const ProductContext = createContext(null);

function App() {
  const [data, setData] = useState(nikeData);
  const [cart, setCart] = useState([]);

  // 2. Wrap the components inside the Context Provider and pass the values
  return (
    <ProductContext.Provider value={{data: data, cart: cart, setCart: setCart}}>
      <div className="">
      <Header/>
      <ProductsList />
      <Footer/>
     </div>
    </ProductContext.Provider>
  );
}

export default App;
