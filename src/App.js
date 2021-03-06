import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SelectedCountryStats from './components/SelectedCountryStats';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app'>
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
