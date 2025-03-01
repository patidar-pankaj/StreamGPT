import logo from "../imgs/logo.png";

const Header = () => {
    return(
        <div className="absolute px-10 py-6 bg-gradient-to-b from-black">
            <img className="w-60" src={logo} alt="Logo"></img>
        </div>
    )
};

export default Header;