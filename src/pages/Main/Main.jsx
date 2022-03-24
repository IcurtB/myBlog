import {Header} from "../../components/header/Header";
import BlogEntries from "../../components/BlogEntries/BlogEntries";
import SideBar from "../../components/Sidebar/Sidebar";
import {Footer} from "../../components/footer/Footer";
import React from "react";

const Main = () => {
    return (
        <>
            <div>
                <div className="w3-content" style={{maxWidth:"1400px"}}>
                    <Header/>
                    <div className="w3-row">
                        <BlogEntries/>
                        <SideBar/>
                    </div>

                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default Main