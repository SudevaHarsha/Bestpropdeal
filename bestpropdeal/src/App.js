import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Property from './pages/Property/Property';
import SearchResultsPage from './pages/SearchResults/SearchResultsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/property/:id' element={<Property />}></Route>
      <Route path='/search' element={<SearchResultsPage />}></Route>
    </Routes>
  );
}

export default App;
