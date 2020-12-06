// import './App.css';

// Material Imports
import Button from '@material-ui/core/Button';


// Firebase Imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firebaseConfig } from './models/FirebaseConfig';

// Firebase Setup
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <title>Workout Logger</title>
      </header>

      <section>
        {user ? <Home /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <Button variant="contained" color="primary" onClick={signInWithGoogle}>Sign in With Google</Button>
  );
}

function Home() {
  return (

    <Button variant="contained" color="primary">Log Exercise</Button>
  );

}

export default App;
