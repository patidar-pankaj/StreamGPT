import logo from "../imgs/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const name = useSelector((store) => store.user?.displayName)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    return(
        <div className="absolute px-10 py-6 bg-gradient-to-b from-black w-screen flex justify-between">
            <img className="w-60" src={logo} alt="Logo"></img>
            {user && <div className="flex justify-between" >
                <p className="p-4 text-white"> {"Welcome "+ name +" !!" }</p>
            <button onClick={handleSignOut} className="bg-red-700 text-white rounded-lg p-3">LogOut</button>
            </div>}
        </div>
    )
};

export default Header;