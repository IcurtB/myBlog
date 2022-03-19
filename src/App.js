import React from "react";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import BlogEntries from "./components/BlogEntries/BlogEntries";
import BlogEntry from "./components/BlogEntries/BlogItem";
import SideBar from "./components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="w3-content" style={{maxWidth:"1400px"}}>
            <Header/>
            <div className="w3-row">
                <BlogEntries/>
                <SideBar/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
