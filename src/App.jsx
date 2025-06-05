import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DefaultLayout from './components/Layout';
import Contact from './pages/Contact';
import Service from './pages/Services';
// import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:serviceId" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;