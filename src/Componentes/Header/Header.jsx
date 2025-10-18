import{Nav} from '../Nav/Nav';
import "./header.css";


export const Header = () => {
    return(
         <header className="header">
         <img src="/images/logo.png" alt="Logo" className="logo" />
         <h1 className="degradado-mexico">El Pinche taco y mas </h1>
            <Nav/>

        </header>
    );
};