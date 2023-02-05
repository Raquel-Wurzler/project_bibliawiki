// import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={ <HomePage /> } />
      </Routes>
  );
}

export default App;
