import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SobreNos from './pages/SobreNos';
import PrayerPage from './pages/PrayerPage';

export default function App() {
  return (
    <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route exact path="/sobrenos" element={ <SobreNos /> } />
        <Route exact path="/prayerpage" element={ <PrayerPage /> } />
      </Routes>
  );
}
