import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Home from './pages/Home';
import MyCarPage from './pages/MyCarPage';
import UserContext from './contexts/UserContext';


function App() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [userToken, setUserToken] = useState(null)

    useEffect( () => {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token) {
      setUserToken(token)
    }

  }, [])
  const handleToken = (token) => {
    console.log("handleToken")
    setFormData({ username: '', password: '' })
    localStorage.setItem("token", token)
    setUserToken(token)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
     <UserContext.Provider value={userToken}>
          <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home  />} /> 
                <Route path="/MyCarPage" element={<MyCarPage  />} /> 
                <Route path="/signup" element={<Signup handleInputChange={handleInputChange} formData={formData} /> } /> 
                <Route path="/login" element={<Login handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} />} />
                <Route path="/logout" element={<Logout userToken={userToken} setUserToken={setUserToken}/>} /> 
            </Routes>
          </Router>
        </UserContext.Provider>
  );
}

export default App
