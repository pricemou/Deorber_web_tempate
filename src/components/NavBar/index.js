import React from 'react';
import {Link} from "react-router-dom";

// styles
import { Wrapper, ContextLeft,ContextRight, Image, Header} from './NavBar.styles';


// Image 
import Logo from '../../Image/logo.png'


export const NavBar = () => {
    return (
        <Header>
            <Wrapper>
                <ContextRight>
                    <Image src={Logo} />
                </ContextRight>

                <ContextLeft className="nav-links">
                    <button className="close-nav" onclick="closemenu()"><i className="fas fa-times-circle"></i></button>
                    <ul className="links">
                    <li>
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        </form>
                    </li>
                    
                    <li><a href="#"><i className="fas fa-microphone"></i></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"><i className="fas fa-comment"></i></a></li>
                    <li><Link to="/"><i className="fas fa-user-circle"></i></Link></li>
                    <li><a href="#"><i className="fas fa-bell"></i></a></li>
                    </ul>
                </ContextLeft>

            </Wrapper>
        </Header>
    )
};

