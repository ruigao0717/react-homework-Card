import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function Card(props){
//   console.log(props.src);
//   return (
//     <div className="card">
//       <img src={props.src} alt="gift" />
//       <h2>{props.title}</h2>
//       <p>{props.subTitle}</p>
//     </div>
//   )
// }
// ReactDOM.render(
//   <Card src="../src/img/gift.jpg" title="Gifts for Him" subTitle="For Valentine's Day"/>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
