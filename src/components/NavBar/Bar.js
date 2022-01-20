import {Link} from "react-router-dom";
// styles
import { Bars} from './NavBar.styles';
// Image 
import Logo from '../../Image/logo.png'
import React from 'react';


export const Bar = () => {
    return (
        <Bars>
            <div class="nav_container">
                <div class="col-md-12">
                    <nav class ="navs">
                        <div class ="navs-mobile">
                              <ul>
							 	<li><a href ="#"> <i class="far fa-arrow-alt-circle-left"></i></a></li>
							 	<li><a href ="#"> Retour</a></li>
							 	<li><a href ="#"> |</a></li>
                              	<li><a href ="#"> Accueil</a></li>
								<li><a href ="#"> > </a></li>
                              	<li><a href ="#"> Tendance</a></li>
                              </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </Bars>
        
    )
};

