import Header from "./Header";
import { useState } from "react";

const Login = () =>{

        const [isSignInForm, setisSignInForm] = useState(true);

        const toggleForm = () => {
            setisSignInForm(!isSignInForm);
        }


        return(
        <div className="relative">
            <Header />
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
                alt="Background-img"></img>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <form className="flex flex-col bg-black bg-opacity-80 h-3/4 w-4/12 p-10 text-white rounded-md">
                    <p className="text-4xl font-bold my-4">{isSignInForm ? "Sign In" : "Sign Up"}</p>
                    {!isSignInForm && <input type="text" className="my-4 p-4 bg-black opacity-50 border border-white rounded-md" placeholder="Enter your Name"></input> }
                    <input type="email" className="my-4 p-4 bg-black opacity-50 border border-white rounded-md" placeholder="Enter your email"></input>
                    <input type="password" className="my-4 p-4 bg-black opacity-50 border border-white rounded-md" placeholder="Enter your password"></input>
                    <button className="my-4 p-4 bg-red-700 rounded-md text-xl">{isSignInForm ? "Sign In" : "Sign Up"}</button>     
                    <p className="my-4 cursor-pointer" onClick={toggleForm}>{isSignInForm ? "New to StreamGPT ? SignUp Now !!" : "Already Registered ? SignIn Now !!"}</p>      
                </form>
            </div>
        </div>
    )
};

export default Login;