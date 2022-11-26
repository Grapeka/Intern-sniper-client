import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Validate from "./pages/Validate";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import useAuth from "./hooks/useAuth";
import { AuthContext } from "./providers/authProvider";

function App() {
  const [auth, token, setToken] = useAuth();
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/:id" element={<Profile user={user} />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
