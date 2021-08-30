import React from 'react'
import {Carousel} from '3d-react-carousal';
import logo from '../../scenes/img/logo.png';
import Groupe1 from '../../scenes/img/Groupe1.png';

let slides = [
    <img  src={Groupe1} alt="1" className="slider-taille" />,
    <img  src={Groupe1} alt="2" className="slider-taille"/>  ,
    <img  src={Groupe1}alt="3" className="slider-taille"/>  ,
    <img  src={Groupe1}alt="4" className="slider-taille"/>  ,
    <img src={Groupe1} alt="5" className="slider-taille"/>   ];


const Header = () => {

    return (
        <div>
            <main>
                <div className="hero_registers">
                    <div className="container margin_120_94" id="hero_regist">
                      <img src={logo} alt={"logo"}  className="logoDeober"/>
                        <div class="">
                                <div class="body">
                                    <div class="swiper-container">
                                        <Carousel slides={slides} interval={1000}/>
                                    </div>
                                </div>	
                            </div>
                    </div>
                    <div className="demandeVideo">
                        <div className="container">
                            <ul class="demanderMaintnant">
                                <li><a href="#">Obtenir une vidéo personnalisée maintenant</a></li>
                                <li><a href="#"><i class="fas fa-film"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
        
    )
}

export default Header


