import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul style={{display: 'flex'}}>
                <Link to="/">
                    <li style={{marginLeft: 10 , listStyle: 'none'}}>Accueil</li>
                </Link>
                
                <Link to="/Signup">
                    <li style={{marginLeft: 10 , listStyle: 'none'}}>Projets</li>
                </Link>
                
                <Link to="/Login">
                    <li style={{marginLeft: 10 , listStyle: 'none'}}>Contact</li>Claude1502.
                </Link>
                
            </ul>
        </div>
    )
}

export default Navigation;
