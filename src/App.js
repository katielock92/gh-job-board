import HomePage from './pages/HomePage';
import "./styles/App.css";
import "./styles/fonts.css"
import "./styles/header.css"

function App() {

  return (
    <div className="App">
      
      {/* Other components */}

      <HomePage />

    {/* replace with footer component when ready: */}
      <footer>
        <p>Powered by Greenhouse</p>
        <p>Read our Privacy Policy</p>
      </footer>
    </div>
  );
}

export default App;
