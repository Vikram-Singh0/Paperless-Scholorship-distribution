import './Header.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Header = ({isLoggedIn ,setIsLoggedIn}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        navigate('/');
        toast.success("Logged out Successfully")
    };

    return (
        <header>
            <nav>
                <div className='navbar'>
                    <div className='navbar-home'>
                        <li><Link to="/"><img src="aicet.png" alt="AS" /></Link></li>
                    </div>

                    <button className='menu-icon' onClick={handleMenuToggle}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>

                    <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        {isLoggedIn ? (
                            <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/community">HelpDesk</Link></li>
                                <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Signup</Link></li>
                                <li><Link to="/community">HelpDesk</Link></li>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
