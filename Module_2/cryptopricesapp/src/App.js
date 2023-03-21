import {Routes, Route} from 'react-router-dom';

// Pages Components
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* Here we define all our routes */}
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/currencies' element={<Currencies />} />

        <Route path='/price/:symbol' element={<Price />}/>

      </Routes>
    </div>
  );
}

export default App;
