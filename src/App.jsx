import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Homepage from './Hompage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
