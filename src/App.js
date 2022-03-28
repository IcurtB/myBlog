import React from "react";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import User from "./pages/User/User";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="post/:id"  element={<Article/>} />
                <Route path="user" element={<User/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
