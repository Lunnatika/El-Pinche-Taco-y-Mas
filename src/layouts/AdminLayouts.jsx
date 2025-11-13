import { Outlet } from "react-router-dom"

export const AdminLayouts = () => {
    return(
         <section className="admin-layout">
        <Outlet/>
    </section>
    );
};