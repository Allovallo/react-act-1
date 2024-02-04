import Painting from "./components/Painting";
import paintings from "./paintings.json";

export default function App() {
  return (
    <div>
      {paintings.map((painting) => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          author={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={paintings.quantity}
        />
      ))}
    </div>
  );
}

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
