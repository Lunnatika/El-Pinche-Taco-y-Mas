import { Outlet } from "react-router-dom"
import { Header } from "../componentes/Header/Header";


export const MainLayout = () => {
    return (
        <>
        <Header/>
        
        <div>
            <Outlet/>
        </div>
        
        </>
    );
};