import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './main/MainPage';
import Login from "./login/Login";
import ProductDetail from "./product/ProductDetail";
import './App.css'; // Ensure the CSS is imported if not already

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/productDetail" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
