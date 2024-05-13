import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from './Pages/Create'
import Home from "./Pages/Home";
import { AuthContext } from "./store/Context";

function App() {
  // const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if (user) {
  //     console.log("User:", user);
  //     // Perform actions when user is not null
  //   } else {
  //     console.log("User is null");
  //     // Handle the case when user is null
  //   }
  // }, [user]);

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Router>
    </div>
  );
}

export default App;
