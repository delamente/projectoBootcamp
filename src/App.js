import logo from './logo.svg';
import './App.css';


function getCuote() {
  fetch('https://dpaste.com/9AXV38U5P.txt')
  .then(response => response.json())
  .then(data => {} console.log(data));
}

function App() {
  return (
    <div id="quote-box">
        <button ="load-cuote"> Cargar nuevo texto </button>
        <a href="twitter.com/intent/tweet" target="_top"> shared on twitter </a>
      <div id="text">
        <div id="author">


        </div>
      </div>
    </div>
  );
}


export default App;
