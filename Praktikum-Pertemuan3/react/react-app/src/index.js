import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent'; 
import List from './List';
import Header from './Header';
import Test from './Test';
import Footer from './Footer';
import Login from './component/loginComponent'; 
import loginComponent from './component/loginComponent';
import 'bootstrap/dist/css/bootstrap.min.css';




// function HelloComponent() {
//   return <p>Hello World</p>
// }
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));


ReactDOM.render(<Login />, document.getElementById('root'));


// class Statefullcomponent extends React.components{
//   render(){
//     return <p>StateFullComponent</p>
//   }
// }

// ReactDOM.render(<Statefullcomponent/>,document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ServiceWorker.unregister();
