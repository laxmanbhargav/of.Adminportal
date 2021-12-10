import { createContext, useState, useEffect, useContext } from 'react';
import { app, auth } from '../firebase/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const value = { user };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user);
        });
        return unsubscribe;
      }, []);

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContext() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error(
        "useAuthContext must be used within a AuthProvider"
      );
    }
    return context.user;
  }

export { AuthProvider, useAuthContext };
