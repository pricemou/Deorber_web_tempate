import React from 'react'

const MenuTendance = () => {
    return (
        <>
            <div class="row">
                <div class="col-md-12">
                    <nav class ="navs">
                        <a class ="toggle-nav" href ="#"> &#9776; </a>
                        <div class ="navs-mobile">
                            <ul>
                                <li><a href ="#"> <i class="far fa-arrow-alt-circle-left"></i></a></li>
                                <li><a href ="#"> Retour</a></li>
                                <li><a href ="#"> |</a></li>
                                <li><a href ="#"> Accueil</a></li>
                                <li><a href ="#">  </a></li>
                                <li><a href ="#"> Tendance</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MenuTendance
