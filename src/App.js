import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home.jsx';
import Appoinment from './Pages/Home/Appoinment/Appoinment.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Appoinment />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;