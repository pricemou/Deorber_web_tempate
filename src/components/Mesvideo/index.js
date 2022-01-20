import React from 'react'

import { Wrapper ,Main, Context } from './Mesvideo.style'

// Images

import fImage from '../../Image/99.png'
import O31 from '../../Image/031.png'
import icon from '../../Image/icon.png'
import logo from '../../Image/logo.png'
import iconePaie from '../../Image/05.png'
import mtn from '../../Image/mtn.png'
import moov from '../../Image/moov.png'
import orange from '../../Image/orange.png'

export const Mesvideo = () => {
    return (
        <Main>
             <Wrapper image={fImage} className="hero_home_tendance version_3">
                <div className="ttx">  
                </div>
            </Wrapper>

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
                              	<li><a href ="#"> Créateur</a></li>
                              </ul>
                            </div>
                    </nav>
                </div>
            </div>
            
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

            <main className="avis">     
                <div class="container top_commantaire">
                    <h1 class="commantaire">Mes vidéos</h1>
                </div>

                <div class="container top_commantaire">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>

                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>

                            
                        </div>

                        <div class="col-lg-3 mb-4 mb-lg-0">
                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>

                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>
                        </div>

                        <div class="col-lg-3 mb-4 mb-lg-0">
                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>

                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>
                        </div>

                        <div class="col-lg-3 mb-4 mb-lg-0">
                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>

                            <img
                            src="http://via.placeholder.com/565x565.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                            />
                            <p class="prive"><i class="fas fa-eye"></i>Privée</p>
                        </div>
                    </div>
                </div>

                <div class="container top_commantaire">
                    <h1 class="commantaire">Commentaires et avis</h1>
                
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <i class="fas fa-check-circle"></i>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container top_commantaire">
        
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <i class="fas fa-check-circle"></i>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="video">
                    <p class="commandeVide"> Mes commandes de vidéos <strong>26</strong> <i class=" rotations  fa fa-film" aria-hidden="true"></i></p>
                    <p class="viedoTest"> <i class="fa fa-film" aria-hidden="true"></i>Vidéo en 24h</p>
                    
                </div>

                <div class="container top_commantaire">
                    <h3 class="texth3">Aujourd'hui</h3>
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container tr">
                    <div class="row">
                        <div class="col-8 texth3">Hier</div>
                        <div class="col-4 tts">Voir tout</div>
                    </div>
                </div>

                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container tr">
                    <p class="viedoTest"> <i class="fa fa-film" aria-hidden="true"></i>Vidéo en 5 jours</p>
                    <div class="row">   
                        <div class="col-8 texth3">Aujourd'hui</div>
                        <div class="col-4 tts">Voir tout</div>
                    </div>
                </div>


                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container tr">
                    <div class="row">   
                        <div class="col-8 texth3">Hier</div>
                        <div class="col-4 tts">Voir tout</div>
                    </div>
                </div>

                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">01:10
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container tr">
                    <div class="row">   
                        <div class="col-8 texth3">Avant hier</div>
                        <div class="col-4 tts">Voir tout</div>
                    </div>
                </div>


                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container tr">
                    <p class="viedoTest"> <i class="fa fa-film" aria-hidden="true"></i>Vidéo en 5 jours</p>
                    <div class="row">   
                        <div class="col-8 texth3">Vidéo gratuite</div>
                        <div class="col-4 tts">Voir tout</div>
                    </div>
                </div>

                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>01:10
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container tr">
                    <div class="row">   
                        <div class="col-8 texth3">Hier</div>
                        <div class="col-4 tts">Voir tout</div>
                    </div>
                </div>

                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container tr">
                    <div class="row">   
                        <div class="col-8 texth3">Avant hier</div>
                        <div class="col-4 tts">Voir tout</div>
                    </div>
                </div>

                <div class="container top_commantaire">
                    <div class="paragrapheCommantaire">
                        <div class="row">
                            <div class="col-8">
                                <h1 class="Commente" >Commenté par G******, 22 Mars 2022</h1>
                                <p class="test">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen boock.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>
                                
                            </div>
                            
                            <div class="col-4 validers" >
                                <ul class="link">
                                    <li class="Consulter"><a href="#" >Consulter</a></li>
                                    <li><a href="#"><i class="fas fa-photo-video"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </Main>
    )
}