import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainPage from './main/main_page'
import Login from "./login/login";
import Product from "./product/product";

function App() {
    return (
        <Router>
            <div className="App" style={{ backgroundColor: '#f8f8f8' }}>
                <Routes>
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/productDetail" element={<Product />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
