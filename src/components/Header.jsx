
import React from 'react';
import StormIcon from '@mui/icons-material/Storm';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-bg py-3 ">
            <div className="container d-flex align-items-center justify-content-start">
                <StormIcon className='navIcon' />
                <a className="navbar-brand" href="#">TEMP || TRACK</a>
            </div>
        </nav>
    );
}

export default Header;