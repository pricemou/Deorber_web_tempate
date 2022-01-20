import React from 'react';

// Style
import {Wrapper,Context,Main} from './Enregistrement.styles.js'
import {Bar} from '../NavBar/Bar'


//Image
import fImage from '../../Image/99.png'
import O31 from '../../Image/031.png'
import icon from '../../Image/icon.png'
import logo from '../../Image/logo.png'
import orange from '../../Image/orange-money.jpg'


export const Enregistrement = () => {
    return (
        <Main>
             <Wrapper image={fImage} className="hero_home_tendance version_3">
                <div className="ttx">  
                </div>
            </Wrapper>

            <Bar/> 


            <div className="tt container">
                <Context className="row justify-content-md-center ttt-fond" image={icon}>
                    
                    <div className="col col-lg-3">
                        <div class="">
                            <img src={O31} alt="" class="card-img-top profile"/>
                        </div>
                    </div>

                    <div class="col-lg-1">

                    </div>

                    <div class="col col-lg-8 cardePosition">
                          <div class="row">
                            <div class="col col-4">
                                <div class="nom">
                                    <h2>Emma Lohoues</h2>
                                    <h3>Actrice/ blogeuse</h3>
                                    <p class="pr"> <i class="fas fa-calendar-alt"></i>  22/12/1995</p>
                                    <p class="pr"><i class="fas fa-envelope"></i> monmail@gmail.com</p>
                                    <p class="pr"> <i class="fas fa-phone-volume"></i>+225 05 6443 60 15</p>
                                    <p class="pr"> <i class="fas fa-map-marker-alt"></i>Abidjan/ Cote d'Ivoire</p>
                                </div>
                              </div>
                              <div class="col col-4">    
                              </div>

                              <div class="col col-4">
                                  <p class="connecter"> <i class="fas fa-user-edit"></i></p>  
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
                </Context>    
            </div>

            <main class="paiementCardes">
                <p class="enregistrements">Enregistrements</p>

                <div class="row">
                    <div class="col-6 ">
                        <div class="col-12 contour">
                            <h3>Commander par Hassan MERINGUE, 22 Mars 2022</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book.</p>
                         </div>
                             <div class="col-12 th">
                                 <p class="ty"> <i class="fas fa-photo-video"></i> Commencer l'enregistrement</p>
                                 
                             </div>
                         </div>
                         <div class="col-6">
                            <img src="http://via.placeholder.com/565x565.jpg" class="w-100 shadow-1-strong rounded mb-4" alt=""/>
                         </div>
                     </div>
                </main>

        </Main>
    )
}