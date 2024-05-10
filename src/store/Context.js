import { createContext } from "react";

export const FirebaseContext = createContext(null);

// export const AuthContext = createContext(null);

// export default function Context({ childern }) {
//   const [user, SetState] = useState(null);

//   return (
//     <AuthContext.Provider value={{ user,SetState }}>{childern}</AuthContext.Provider>
//   );
// }
