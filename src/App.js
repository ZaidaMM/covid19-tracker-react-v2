import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SelectedCountryStats from './components/SelectedCountryStats';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            path='/SelectedCountryStats'
            element={<SelectedCountryStats />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
