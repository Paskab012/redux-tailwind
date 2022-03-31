import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AllSubmission from './components/AllSubmissions';
import Navbar from './components/Home/Navbar';

import NewSubmission from './components/NewSubmission';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <section className="content">
          <Routes>
            <Route
              path="/AllSubmission"
              element={<AllSubmission />}
            />
            <Route
              path="/NewSubmission"
              element={<NewSubmission className="calculator" />}
            />
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
