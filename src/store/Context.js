import { createContext, useState } from "react";

export const FirebaseContext = createContext(null); // Likely not used here
export const AuthContext = createContext(null);

export default function Context({ children }) { // Corrected prop name
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}