import React from 'react';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
    <Router>
      <Layout />
    </Router>
  </UserProvider>
  );
}

export default App;

