import React from "react";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import User from "./pages/User/User";
import {Toaster} from "react-hot-toast";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="post/:id/"  element={<Article/>} />
                <Route exact path="user" element={<User/>} />
            </Routes>
            <Toaster/>
        </BrowserRouter>
    )
}

export default App;
