import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';




function Navbar({ onLoginClick }) {
    return (
        <nav className="navbar">
            <div className='logo'>🍔 MVULE CATERING</div>
            <ul className="nav-links">
                    <li><Link to='/' className='nav-link'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li><Link to='/menu' className='nav-link'><FontAwesomeIcon icon={faUtensils} /> Menu</Link></li>
            </ul>
            <div className='nav-btns'>
                <Link to='/orders' className='nav-btn1'><FontAwesomeIcon icon={faShoppingCart} /> Order</Link>
                <button onClick={onLoginClick} className='nav-btn2'><FontAwesomeIcon icon={faUser} /></button>
            </div>
            
        </nav>
    )
}

export default Navbar;