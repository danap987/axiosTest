import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
           

            <Link to={"home"}>Home 🏘️</Link>
            <Link to={"countries"}>Countries</Link>
            <Link to={"about"}>About</Link>
            <Link to= {"table"}>Table of Countries</Link>
       

        </div>
    );
}

export default Menu;
