import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import LoginPage from './pages/Login/Login.jsx';
import SignupPage from './pages/Signup/Signup.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import CommunityPage from './pages/CommunityPage/CommunityPage.jsx';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm.jsx';
import VerifyDocument from './pages/VerifyDocument/VerifyDocument.jsx'; 
import Header from './components/Layout/Header/Header.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';
import VerifyIdentity from './components/Auth/VerifyIdentity/VerifyIdentity.jsx';

const App = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [isEmailVerified , setIsEmailVerified] = useState(false)



    return (
        <Router>
            <Header  isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}  />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage setIsLoggedIn = {setIsLoggedIn} />} />

                    <Route path="/signup" element={<SignupPage 
                     isEmailVerified = {isEmailVerified} setIsEmailVerified = {setIsEmailVerified}
                     />} />

                    <Route path="/verify-identity" element={<VerifyIdentity setIsLoggedIn = {setIsLoggedIn} role = {role} setRole = {setRole} />} />
                    
                    <Route path="/dashboard" element={<Dashboard role={role}  setRole = {setRole} />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/apply" element={<ApplicationForm />} />
                    <Route path="sag/verify/:documentId" element={<VerifyDocument />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
             <Footer />
        </Router>
    );
};

export default App;
