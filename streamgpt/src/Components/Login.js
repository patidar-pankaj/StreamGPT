import Header from "./Header";
import { useRef, useState } from "react";
import { validateForm } from "../Utils/ValidateForm";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";

const Login = () =>{

        const [isSignInForm, setisSignInForm] = useState(true);
        const [ errorMsg, seterrorMsg] = useState();
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const toggleForm = () => {
            setisSignInForm(!isSignInForm);
        }

        const emailVal = useRef(null);//useRef is used to get the value of input fields also need to give ref to input fields
        const passwordVal = useRef(null);
        const name = useRef(null);

        const handleSubmit = () => {

            // console.log(emailVal.current.value,passwordVal.current.value);
            const message = validateForm(emailVal.current.value,passwordVal.current.value);
            seterrorMsg(message);

            if(message) return; // If there is some error in form value then immediately return without any further logic

            if(!isSignInForm) {
                //Sign Up logic taken from firebase documentation
                createUserWithEmailAndPassword(auth, emailVal.current.value,passwordVal.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: ""
                      }).then(() => {
                        // Profile updated!
                        const {uid,  displayName, email} = user; //in video auth.currentuser
                        dispatch(addUser({uid:uid, displayName:displayName, email:email}))
                        navigate("/browse");

                      }).catch((error) => {
                        // An error occurred

                      });
                    

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMsg(errorMessage);
                    // console.log(errorMessage,errorCode);
                });
            } else {
                //sign in logic
                signInWithEmailAndPassword(auth, emailVal.current.value,passwordVal.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse");
                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(errorMessage);
                    errorMessage === "Firebase: Error (auth/invalid-credential)." && seterrorMsg("Invalid Credentials");
                    
                });
            }
        }


        return(
        <div className="relative overflow-x-hidden">
            <Header />
            <div className="w-screen">
                <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
                alt="Background-img"></img>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <form onSubmit={(e)=> e.preventDefault()} className="flex flex-col bg-black bg-opacity-80 h-3/4 w-4/12 p-10 text-white rounded-md">
                    <p className="text-4xl font-bold my-4">{isSignInForm ? "Sign In" : "Sign Up"}</p>
                    {!isSignInForm && <input ref={name} type="text" className="my-4 p-4 bg-black opacity-50 border border-white rounded-md" placeholder="Name"></input> }
                    <input ref={emailVal} type="email" className="my-4 p-4 bg-black opacity-50 border border-white rounded-md" placeholder="Email"></input>
                    <input ref={passwordVal} type="password" className="my-4 p-4 bg-black opacity-50 border border-white rounded-md" placeholder="Password"></input>
                    <p className="my-2 p-2 font-bold text-red-600 text-lg">{errorMsg}</p>
                    <button className="my-4 p-4 bg-red-700 hover:bg-red-600 rounded-md text-xl" onClick={handleSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>     
                    <p className="my-4 cursor-pointer hover:font-bold" onClick={toggleForm}>{isSignInForm ? "New to StreamGPT ? SignUp Now !!" : "Already Registered ? SignIn Now !!"}</p>      
                </form>
            </div>
        </div>
    )
};

export default Login;