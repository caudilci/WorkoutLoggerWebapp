import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firebaseConfig } from './models/FirebaseConfig';

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
    <Button variant="primary" onClick={signInWithGoogle}>Sign in With Google</Button>
  );
}

function Home() {

}

export default App;
