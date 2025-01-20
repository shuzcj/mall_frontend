import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/main/MainPage';
import Login from "./components/login/Login";
import ProductMainPage from "./components/product/ProductMainPage";
import StoreMainPage from "./components/store/storeMainPage";
import './App.css'; // Ensure the CSS is imported if not already
import MyAccount from "./components/myAccount/MyAccount";
import PurchaseConfirmationPage from "./components/purchase/purchaseConfirmationPage";
import PurchaseResult from "./components/purchase/purchaseResultPage";
import MyStoreMainPage from "./components/store/myStoreMainPage";
import Register from "./components/login/register";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/product/:productId" element={<ProductMainPage />} />
                    <Route path="/store/:userId" element={<StoreMainPage/>}/>
                    <Route path="/myStore" element={<MyStoreMainPage />} />
                    <Route path="/myAccount" element={<MyAccount />} />
                    <Route path="/purchaseConfirmation" element={<PurchaseConfirmationPage />} />
                    <Route path="/purchaseResult" element={<PurchaseResult/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
