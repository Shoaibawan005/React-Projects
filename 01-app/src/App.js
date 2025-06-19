import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import MyComponent from './MyComponent';

function App() {

  const [isVisible, setVisible] = useState(true);

  const visibility = () => {
    setVisible(!isVisible);
  }

  useEffect(() => {
    console.log("I'm Mounting from APP")
  }, [isVisible])
  return (
    <div className="App">
      {isVisible ?  <MyComponent/> : <h1>UnToggled</h1>}
      <button onClick={visibility}>Toggle</button>
    </div>
  );
}

export default App;
