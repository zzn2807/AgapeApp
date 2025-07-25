import Agape_Logo from "../img/Agape-Logo.png"
import "../css/Header.css"
import { useContext } from "react";
import MenuContext from "../Context/MenuContext";
function Header() {
    const {setMenuOpen} = useContext(MenuContext);
    return (
        <div className="header">
            <div className="burger-menu" onClick={()=>setMenuOpen(true)}>&equiv;</div>
            <img className="logo" src={Agape_Logo}/>
        </div>

    );
}

export default Header;