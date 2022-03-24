import React from "react";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="post/:id"  element={<Article/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
