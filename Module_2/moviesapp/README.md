# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Form.js using useRef Hook

```
import {useRef, useState} from 'react';

function Form(props) {
    const { movieSearch } = props;

    const inputRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }

  return (
    <div>
      <form onSubmit={handleClick}>

        <input ref={inputRef} type="text" placeholder="Enter movie title"/>

        <input type="submit" />
      </form>
    </div>
  );
}
export default Form;
```