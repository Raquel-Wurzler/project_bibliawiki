import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SobreNos from './pages/SobreNos';

export default function App() {
  return (
    <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route exact path="/sobrenos" element={ <SobreNos /> } />
      </Routes>
  );
}
