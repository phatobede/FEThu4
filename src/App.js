import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>

          </Routes>
        </Router>
    </div>
  );
}

export default App;