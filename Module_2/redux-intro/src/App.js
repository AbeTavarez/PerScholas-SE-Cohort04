import Counter from './components/Counter';
import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr/>
      <Todos/>
    </div>
  );
}

export default App;
