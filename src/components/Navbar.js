import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  
  const handleClick = ()=> setClick(!click);
  const closeMobileMenu = ()=> setClick(false);
  
  return (
   <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                WREC <i class="fa-sharp fa-solid fa-book-open-reader"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/speakers' className='nav-links' onClick={closeMobileMenu}>
                        Speakers 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/committee' className='nav-links' onClick={closeMobileMenu}>
                        Committee
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/sponsors' className='nav-links' onClick={closeMobileMenu}>
                        Sponsors
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/awards' className='nav-links' onClick={closeMobileMenu}>
                        Awards
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/registration' className='nav-links' onClick={closeMobileMenu}>
                        Registration
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
   </>
  )
}

export default Navbar
