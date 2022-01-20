import React from 'react';

// style
import './Profile.styles.css'
import {Context, Wrapper,Main} from './Profile.styles'
import {Bar} from '../NavBar/Bar'

// Image
import fImage from '../../Image/99.png'
import O31 from '../../Image/031.png'
import icon from '../../Image/icon.png'
import logo from '../../Image/logo.png'

export const Profile = () => {
    return (
        <Main>
            <Wrapper image={fImage} className="hero_home_tendance version_3">
                <div className="ttx">
                </div>
            </Wrapper>
            
            <Bar/>
            

            <div>
                <div className="tt container">
                    <Context className="row justify-content-md-center ttt-fond" image={icon}>

                        <div class="col col-lg-3">
                            <div class="">
                                <img src={O31} alt="" class="card-img-top profile"/>
                            </div>
                        </div>

                        <div className="col-lg-1">
                        </div>

                        <div className="col col-lg-8 cardePosition">
                            <div className="row">
                                <div className="col col-4">
                                    <div class="nom">
                                        <h2>Emma Lohoues</h2>
                                        <h3>Actrice/ blogeuse</h3>
                                        <a href=""><i class="fa fa-film" aria-hidden="true"></i>Vidéo en 24h</a>
                                        <p>Actuellement disponible</p>
                                    </div>
                                </div>

                                <div class="col col-4">
                                    <div class="video-rotation">
                                        <a href=""><i class=" rotations  fa fa-film" aria-hidden="true"></i></a>
                                        <h1>50.000 F CFA</h1>
                                        <div>
                                            <ul>
                                                <li><p>Demander une vidéo maintenant</p></li>
                                                <li><i class="far fa-arrow-alt-circle-right"></i></li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-4">
                                    <div class="video-rotation">
                                        <a href=""><i class=" rotations  fa fa-comments" aria-hidden="true"></i></a>
                                        <h1>20.000 F CFA</h1>
                                        <div>
                                            <ul>
                                                <li><p>Demander une vidéo maintenant</p></li>
                                                <li><i class="far fa-arrow-alt-circle-right"></i></li>
                                            </ul>   
                                        </div>
                                    </div>
                                </div>

                                <div class="row tdr">
                                    <div class="col col-lg-4">
                                        <h1> Temps de réponse </h1>
                                        <ul>
                                            <li><i class="fas fa-bell"></i></li>
                                            <li>5 jours</li>
                                        </ul>
                                    </div>
                                        <div class="col col-lg-4">
                                            <h1> Avis et commentaires</h1>
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li>5.0</li>
                                        </ul>
                                    </div>
                        
                                    <div class="col col-lg-4">
                                        <h1>Fan club</h1>
                                        <ul>
                                            <li><i class="fas fa-heart"></i></li>
                                                <li>23354</li>
                                            </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Context>
                </div>
            </div>

            <main class="avis">
            <div class="container top_commantaire">
                <h1 class="commantaire">Commentaires et avis</h1>
            
                <div class="paragrapheCommantaire">
                    <div>
                        <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book
                        </p>
                    </div>
                </div>
            </div>

            <div class="container top_commantaire">
            
                <div class="paragrapheCommantaire">
                    <div>
                        <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book
                        </p>
                    </div>
                </div>
            </div>


            <div class="container top_commantaire">
            
                <div class="paragrapheCommantaire">
                    <div>
                        <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book
                        </p>
                    </div>
                </div>
            </div>

            <div class="container top_commantaire">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                        src="http://via.placeholder.com/565x565.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />

                        <img
                        src="http://via.placeholder.com/565x565.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src="http://via.placeholder.com/565x565.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />

                        <img
                        src="http://via.placeholder.com/565x565.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src="http://via.placeholder.com/565x565.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />

                        <img
                        src="http://via.placeholder.com/565x565.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />
                    </div>
                </div>
            </div>

            <div class="container top_commantaire">
                <h1 class="commantaire">Catégories similaires</h1>
            </div>

        </main> 

        <div class="similairesCategorie">
            <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav class ="navs"> 
                                    <div class ="navs-mobile">
                                    <ul>
                                        <li><a href ="#"> <i class="fas fa-search"></i></a></li>
                                        <li><a href ="#"> Acteurs</a></li>
                                        <li><a href ="#"> Télé realité </a></li>
                                        <li><a href ="#"> Athlètes</a></li>
                                        <li><a href ="#">Musiciens </a></li>
                                        <li><a href ="#"> Comediens</a></li>
                                    </ul>
                                    </div>
                            </nav>
                        </div>
                        
                    </div>
                        
                </div>
            </div>

            <main>
            <div class="container top_commantaires">
                <h1 class="commantaires">A propos de   <img src={logo} alt="" /></h1>
              
            
                <div class="paragrapheCommantaire">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <h1 class="Commente_rigth">Commenté par G******, 22 Mars 2022</h1>
                            <div class="row">
                                <div class="col-2 commenter_icon">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <div class="col-10">
                                    <p class="ttr">Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 commenter_icon">
                                    <i class=" fas fa-video ttri"></i>
                                </div>
                                <div class="col-10">
                                    <p class="ttr">Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 commenter_icon">
                                    <i class=" fas fa-calendar-check"></i>
                                </div>
                                <div class="col-10">
                                    <p class="ttr">Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <h1 class="Commente_left" >Pourquoi utiliser Deober ?</h1>
                            <p className="Commente_left_P">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make
                                a type specimen book.when an unknown
                                printer took a galley of type and scrambled it to
                                make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </Main>
        
    )
}
