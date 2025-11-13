import { Outlet } from "react-router-dom"
import { Header } from "../componentes/Header/Header";
import { Footer } from "../componentes/Footer/Footer";


export const MainLayout = () => {
    return (
        <>
        <Header/>
        
        <div>
            <Outlet/>
        </div>

        <Footer/>
        
        </>
    );
};