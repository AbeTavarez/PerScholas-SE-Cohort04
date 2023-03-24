//? == Selector reads data, dispatch sends out actions
import {useSelector, useDispatch} from 'react-redux';

//? Actions
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
    //? == Selector reads data
    const count  = useSelector(state => state.counter.value);

    //? dispatch sends out actions
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>

        <span>{count}</span>

        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br/>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
}

export default Counter;
