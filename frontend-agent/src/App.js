import { useState, useEffect, useContext } from "react";
import "./App.css";
import axios from "axios";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import LoginPage from "./Components/LoginPage"; // Import your login component

import AuthContext from "../src/AuthContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const newAuth = {
        email,
        password,
      };

      axios
        .post("https://finaldeploye.onrender.com/agent/login", newAuth)
        .then((res) => {
          alert("Login successful");
          setLoggedIn(true);
          localStorage.setItem("loggedIn", "true"); // Store login status in localStorage
        })
        .catch((err) => {
          alert("Please check your username and password again");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn"); // Remove login status from localStorage
  };


  return (
    <div className="App">
      <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
        <AppHeader />
        {loggedIn ? (
          <div className="SideMenuAndPageContent">
          {/* <button onClick={handleLogout}>Logout</button> */}
          <SideMenu onLogout={handleLogout} />
          <PageContent />
        </div>
        ) : (
          <LoginPage />
        )}
      </AuthContext.Provider>
    </div>
  );

}

export default App;
