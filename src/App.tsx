import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Home from './pages/Home';
import Tailwindtest from './pages/Tailwindtest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" Component={Tailwindtest} />
      </Routes>
    </Router>
  );
}

export default App;
