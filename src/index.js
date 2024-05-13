import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContext, FirebaseContext } from "./store/Context"; // Assuming Context is renamed to AuthContext
import firebase from "./firebase/config";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <AuthContext.Provider value={{ firebase }}>
      <App />
    </AuthContext.Provider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);