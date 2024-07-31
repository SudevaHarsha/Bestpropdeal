import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Property from './pages/Property/Property';
import SearchResultsPage from './pages/SearchResults/SearchResultsPage';
import About from './pages/AboutUs/About';
import ContactUs from './pages/ContactUs/ContactUs';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Policies from './pages/Policies/Policies';
import Awards from './pages/Awards/Awards';
import Developers from './pages/Dvelopers/Developers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/property/:id' element={<Property />}></Route>
      <Route path='/search' element={<SearchResultsPage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<ContactUs />}></Route>
      <Route path='/terms' element={<TermsAndConditions />}></Route>
      <Route path='/policy' element={<Policies />}></Route>
      <Route path='/awards' element={<Awards />}></Route>
      <Route path='/developers' element={<Developers />}></Route>
    </Routes>
  );
}

export default App;
