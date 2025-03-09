import logo from "../imgs/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../Utils/UserSlice";
import { triggerToggleSearch } from "../Utils/GptSlice";


const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const name = useSelector((store) => store.user?.displayName)
    const isSearchPage = useSelector((store) => store.gpt.toggleSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    };

    const handleSearchToggle = () =>{
        dispatch((triggerToggleSearch()));
    }

    //onauthstatechanged is a firebase function that is called whenever the user is signed in or signed out.
    // we are calling this in useEffect with empty array because 
    // we want to call this function only once when the component is mounted.
    // We have putted this logic in header because Header is always present in the app. 
    // So the user auth is checked everytime
    useEffect(() => {

        // onAuthStateChanged is like a event listener and it returns an unsubscribe function
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid,email,displayName }= user;
                dispatch(addUser({uid :uid, email: email, displayName : displayName}));
                navigate("/browse");
    
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
            });

            // unsubscribing the event listener when the component is unmounted
            return () => unsubscribe();
    },[])

    return(
        <div className="absolute px-10 py-6 bg-gradient-to-b from-black w-screen flex justify-between z-10">
            <img className="w-60" src={logo} alt="Logo"></img>
            {user && <div className="flex justify-between" >
                <p className="p-4 text-white"> {"Welcome "+ name +" !!" }</p>
            <button onClick={handleSearchToggle} className="bg-red-700 text-white rounded-lg px-3 m-2">{isSearchPage ? "Home" : "Search GPT ✨"}</button>
            <button onClick={handleSignOut} className="bg-red-700 text-white rounded-lg px-3 m-2">LogOut</button>
            </div>}
        </div>
    )
};

export default Header;