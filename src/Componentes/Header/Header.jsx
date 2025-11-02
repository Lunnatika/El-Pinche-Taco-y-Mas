import { Link } from 'react-router-dom';
import{Nav} from '../Nav/Nav';
import "./Header.css";


export const Header = () => {
    return(
         <header className="header">
            <Link to={"/"}>
         <img src="/images/logo.png" alt="Logo" className="logo" />
            </Link>
         <h1 className="degradado-mexico">El Pinche taco y mas </h1>
            <Nav/>

        </header>
    );
};