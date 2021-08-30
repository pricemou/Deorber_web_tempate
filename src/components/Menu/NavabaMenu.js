import React from 'react';
// import {logo} from '../scenes/img/logo.png'
import logo from '../../scenes/img/logo.png';

function NavabaMenu() {
    return (
        <header>
        <div class="navbar">
          <div class="logo"><img src={logo} alt="" class="logoimage"/></div>
            <div class="nav-links">
                <button class="close-nav" onclick="closemenu()"><i class="fas fa-times-circle"></i></button>
                <ul class="links">
                  <li>
                    <form class="uk-search uk-search-navbar uk-width-1-1">
                      <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search"/>
                        
                      </div>
                    </form>
                  </li>
                  <li><a href="#"><i class="fas fa-microphone"></i></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"><i class="fas fa-comment"></i></a></li>
                  <li><a href="#"><i class="fas fa-user-circle"></i></a></li>
                  <li><a href="#"><i class="fas fa-bell"></i></a></li>
                </ul>
            </div>
          <div class="menu-trigger">
              <button onclick="openmenu()"><i class="fas fa-bars"></i></button>
            </div>
        </div>
      </header>
    )
}

export default NavabaMenu;
