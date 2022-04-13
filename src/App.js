import React from "react";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import User from "./pages/User/User";
import Goods from "./pages/User/Goods";
import {Toaster} from "react-hot-toast";
import Basket from "./components/Basket/Basket";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="post/:id/"  element={<Article/>} />
                <Route exact path="user" element={<User/>} />
                <Route exact path="goods" element={<Goods/>} />
                <Route exact path="basket" element={<Basket/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
    )
}

export default App;
