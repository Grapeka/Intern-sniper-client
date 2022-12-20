import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Validate from './pages/Validate';
import Favorite from './pages/Favorite';
import Popular from './pages/Popular';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import CreateProgram from './pages/CreateProgram';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useAuth from './hooks/useAuth';
import { AuthContext } from './providers/authProvider';
import Logout from './pages/Logout';
import MyProgram from './pages/MyProgram';

function App() {
  const [auth, token, setToken] = useAuth();

  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/:id" element={<Profile user={auth} />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/myProgram" element={<MyProgram />} />
          <Route path="/create-program" element={<CreateProgram />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
