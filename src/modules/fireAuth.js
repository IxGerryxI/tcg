import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app } from "./firebase";
import { useUserStore, storeToRefs } from "@/stores";



export {
    logInWithPopup, logOut,
    addAuthChangeListener
}

const auth = getAuth(app);
const authChangeListener = [];
onAuthStateChanged(auth, (authuser) => {
    let { user } = storeToRefs(useUserStore());
    // https://firebase.google.com/docs/reference/js/auth.user
    if (authuser) {
        user.value = authuser;
    } else user.value = null;

    authChangeListener.forEach(l => l(authuser));
});

function addAuthChangeListener(f) {
    authChangeListener.push(f)
}

function logInWithPopup() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(err => console.warn(err));
}

function logOut() {
    signOut(auth);
}