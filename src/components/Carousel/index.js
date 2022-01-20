import React from 'react'

// Style
import './App.css'
import {Main ,Wrapper ,Context ,Image} from './Carousel.styles'

// Composent

// Image
import fImage from '../../Image/logoSanFond.png'
import logo from '../../Image/05.png'


export const Carousel = () => {
    return (
        <Main>
            <Wrapper>
                <Context image={fImage} className="container">
                    <Image src={logo} />
                    <div>
                        <div class="gallery">
                            <div class="gallery-container">
                                <img class="gallery-item gallery-item-1" src="http://fakeimg.pl/300/?text=1" data-index="1"/>
                                <img class="gallery-item gallery-item-2" src="http://fakeimg.pl/300/?text=2" data-index="2"/>
                                <img class="gallery-item gallery-item-3" src="http://fakeimg.pl/300/?text=3" data-index="3"/>
                                <img class="gallery-item gallery-item-4" src="http://fakeimg.pl/300/?text=4" data-index="4"/>
                                <img class="gallery-item gallery-item-5" src="http://fakeimg.pl/300/?text=5" data-index="5"/>
                            </div>
                            <div class="gallery-controls"></div>
                        </div>
                    </div>

                    <div className="demandeVideo">
                        <div className="container">
                            <ul className="demanderMaintnant">
                                <li>
                                    <a href="#">Obtenir une vidéo personnalisée maintenant</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-film"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </Context>
                
            </Wrapper>
            
        </Main>
    )
}
