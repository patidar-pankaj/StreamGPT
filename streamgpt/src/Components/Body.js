import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";


const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <Login />
        },
        {
            path : "/browse",
            element: <Browse />
        }
    ]);
    
    //onauthstatechanged is a firebase function that is called whenever the user is signed in or signed out
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
         const {uid,email,displayName }= user;
         dispatch(addUser({uid :uid, email: email, displayName : displayName}));

        } else {
          // User is signed out
          dispatch(removeUser());
        }
      });


    return(
            <RouterProvider router={appRouter} />
    )
};

export default Body;