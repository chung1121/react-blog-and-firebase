import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzPQqvvnYZj8352gi1j0Oij7aquHQgm74',
  authDomain: 'blog-7611e.firebaseapp.com',
  projectId: 'blog-7611e',
  storageBucket: 'blog-7611e.firebasestorage.app',
  messagingSenderId: '627787508177',
  appId: '1:627787508177:web:85310716ebac557f6a18f0',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
