import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="side-bar">
      <img src="" alt="Logo" />
      <nav>
        <Link to={'/home'}>Home</Link>
        <Link to={'/profile'}>Usuario</Link>
        <Link to={"/"}>Cerrar Sesion</Link>
      </nav>
    </header>
  );
};  

export default Header;
