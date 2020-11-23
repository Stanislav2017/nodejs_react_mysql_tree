import React from 'react';
import 'materialize-css';
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hooks';
import { AuthContext } from './context/AuthContext';

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(true);
  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isAuthenticated }}>
      <Router>
        <div className="wrapper">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
