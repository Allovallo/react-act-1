import ReactDOM from "react-dom";
import paintings from "./paintings.json";

const data = paintings[0];
const data2 = paintings[1];

const painting1 = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Автор: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Ціна: {data.price} кредитів</p>
    <p>Доступність: закінчується або є в наявності</p>
    <button type="button">Додати до корзини</button>
  </div>
);

const painting2 = (
  <div>
    <img src={data2.url} alt={data.title} width="480" />
    <h2>{data2.title}</h2>
    <p>
      Автор: <a href={data2.author.url}>{data2.author.tag}</a>
    </p>
    <p>Ціна: {data2.price} кредитів</p>
    <p>Доступність: закінчується або є в наявності</p>
    <button type="button">Додати до корзини</button>
  </div>
);

const els = (
  <div>
    {painting1}
    {painting2}
  </div>
);

ReactDOM.render(els, document.querySelector("#root"));

// ================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
