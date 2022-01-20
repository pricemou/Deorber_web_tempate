import React from 'react'

// Style
import {Wrapper, Context} from './Menu.style'


const Menu = () => {
    return (
        <Wrapper className="container-fluid" >
            <Context className="container">
                <ul>
                    <li>Accueil <strong>|</strong> </li>
                    <li>Tendance</li>
                    <li>Acteurs</li>
                    <li>Télé</li>
                    <li>Musiciens</li>
                    <li>Comédiens</li>
                    <li>Toutes les catégories</li>
                </ul>
            </Context>
        </Wrapper>
    )
}

export default Menu
