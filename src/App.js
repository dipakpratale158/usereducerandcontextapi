// import "./styles.css";

import React, { useEffect, useState } from "react";
import AuthContext from "./Store/Auth-context";
import Login from "./components/Login/Login";
// import Step2login from "./components/Login/Step2login";
// import Step3login from "./components/Login/Step3login";

import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storelogininfo = localStorage.getItem("isLoggedIn");

    if (storelogininfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password, colname) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        ///text,object
        isLoggedIn,
        onLogout: logoutHandler
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
