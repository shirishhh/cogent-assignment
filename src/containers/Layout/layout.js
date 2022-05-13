import React from "react";
import Content from "../Content/content";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <Header />
            <Content />
            <Footer />

        </div>
    )
}
export default Layout