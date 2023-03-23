import { createContext, useReducer } from 'react';

import HomePage from './pages/HomePage';
import './App.css';

// Init our context
export const MyContext = createContext(null);

function App() {

  const initialState = 0;
  // Init the useReducer 
  // we need to pass a reducer function and the initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Reducer function which will have all the logic to update the state
  function reducer(state, action) {
    const {type, payload} = action;

    console.log(action);

   switch(type) {
    case 'add':
      return state + 1;

    case 'subtract':
      return state - 1;

    case 'ADD_FIVE':
      if (payload){
        return state + payload;
      }
      break;
      
    default:
      return state
   }

  }

  return (
    <MyContext.Provider value={ {state, dispatch} } >

    <div className="App">
      <HomePage />
    </div>

    </MyContext.Provider>
  );
}

export default App;
