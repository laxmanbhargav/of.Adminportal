import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { handleLogin, handleLogout } from '../utils/auth';

const auth = getAuth();


export async function LoginWithCredentials(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      handleLogin(user?.accessToken);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


export function Logout() {
  signOut(auth).then(() => {
    handleLogout();
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}