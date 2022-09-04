import {
  createContext,
  useEffect,
  useState
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider
} from "firebase/auth";
import { auth } from "../firebase";


// Make context:
const UserContext = createContext();

// Make global state:
const UserState = ({children}) => {
  
  // State Variable:
  const [user,setUser] = useState({id: 43});
  
  function SignUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
  }
  
  function Login(email,password){
    return signInWithEmailAndPassword(auth,email,password);
  }
  
  function Logout(){
    return signOut(auth);
  }
  
  function SignInWithGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider);
  }
  
  function SignInWithFacebook(){
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth,provider);
  }
  
  function SignInWithGithub(){
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth,provider);
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      await setUser(currentUser);
    });
    
    return () => {
      unsubscribe();
    }
  },[]);
  
  const Handlers = {
    SignUp,
    Login,
    user,
    Logout,
    SignInWithGoogle,
    SignInWithFacebook,
    SignInWithGithub
  };
  
  return(
    <UserContext.Provider value={Handlers}>
      { children }
    </UserContext.Provider>
  );
};  

// Export all:
export default UserContext;
export {UserState};