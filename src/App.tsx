import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MainLayout from './components/MainLayout';
import { Routes, Route, Navigate } from 'react-router-dom';

export interface currentUserData {
  login: string | undefined
  isLogged: boolean
}

const App = () => {
  const [user, setUser] = useState<currentUserData>({ login: '', isLogged: false });

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUserData');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleSetUser = (data: currentUserData): void => {
    localStorage.setItem('currentUserData', JSON.stringify(data));
    setUser(data);
  };

  const handleLogOut = (): void => {
    localStorage.removeItem('currentUserData');
    setUser({ login: '', isLogged: false });
  };

  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={user.isLogged
            ? <Navigate to="/profile" replace />
            : <Navigate to="/login" replace />}
        />
        <Route
          path="login"
          element={user.isLogged
            ? <Navigate to="/profile" replace />
            : <Login setUser={handleSetUser} />}
        />
        <Route
          path="profile"
          element={user.isLogged
            ? <Profile login={user.login} handleLogOut={handleLogOut} />
            : <Navigate to="/login" replace />}
        />
      </Routes>
    </MainLayout>
  );
};

export default App;
