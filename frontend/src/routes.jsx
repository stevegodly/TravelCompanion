import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Weather from "../src/pages/Weather"
import Home from '../src/pages/Home';
import Trip from '../src/pages/Trip'; 
import WeekTrip from '../src/pages/Week';
import LoginRegister from './pages/LoginRegister';

export default function PageRoutes() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Trip" element={<Trip />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Trip/:lat/:lng/:type" element={<WeekTrip />} />
        </Routes>
        </QueryClientProvider>     
    </Router>
  );
}