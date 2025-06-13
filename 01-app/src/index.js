import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function URL() {

  const link = "https://shoaibabbas.netlify.app/";

  const element = <a href = {link}>Click Here</a>
  return element;
}


function Name(){
  const nm = "Shoaib Abbas";
  const element = <h1>{formatName(user)}</h1>;

  return element;
}

const user = {
  firstName : "Shoaib",
  lastName: "Abbas Awan"
}

function formatName(user){
    return user.firstName + " " + user.lastName;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Name></Name>
  <App></App> 
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
