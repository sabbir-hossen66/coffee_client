import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProviders = ({ children }) => {
  // const [user, setUser] = useState(null);

  // email

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {

    createUser
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;