import ReactDOM from "react-dom";
import paintings from "./paintings.json";

function Painting(props) {
  console.log(props);
  return (
    <div>
      <img src={props.url} alt={props.title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={props.profileUrl}>{props.authorName}</a>
      </p>
      <p>Ціна: {props.price} кредитів</p>
      <p>Доступність: закінчується або є в наявності</p>
      <button type="button">Додати до корзини</button>
    </div>
  );
}

const painting = paintings[1];

ReactDOM.render(
  <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUrl={painting.author.url}
    price={painting.price}
  />,
  document.querySelector("#root")
);

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
