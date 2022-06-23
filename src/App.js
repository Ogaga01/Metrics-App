import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Country from './Pages/Country';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country_code" element={<Country />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
