import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Trip from '../src/pages/Trip'; 
import WeekTrip from '../src/pages/Week';

export default function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trip/:lat/:lng/:type" element={<WeekTrip />} />
      </Routes>
    </Router>
  );
}