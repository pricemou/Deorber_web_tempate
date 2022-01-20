import React from 'react'

import { Wrapper ,Main, Context } from './Livraison.styles'

import {Bar} from '../NavBar/Bar'

// Images

import fImage from '../../Image/99.png'
import O31 from '../../Image/031.png'
import icon from '../../Image/icon.png'
import logo from '../../Image/logo.png'
import iconePaie from '../../Image/05.png'
import mtn from '../../Image/mtn.png'
import moov from '../../Image/moov.png'
import orange from '../../Image/orange.png'
// import orange from '../../Image/orange-money.jpg'


export const Livraison = () => {
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


            <div className="container-s">
                <ul className="progressbar">
                    <li className="active">
                         1. Compte
                    </li>
                    <li> 2. Demande de vidéo

                    </li>
                    <li>3. Méthode de paiement</li>
                </ul>
            </div>

            <main class="paiementCarde">
            <div class="container paiementCommantaire">
                <h1 class="commantaire">Information de paiement</h1>
            
                <div class="paragrapheCommantaire">
                    <div class="paiementMargeine">
                        <h1 class="paiement">Choisissez votre mode de livraison</h1>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Standard (gratuit)
                            </label>
                            <p>2-7 jours</p>
                          </div>
                          <div class="form-check paimentTop">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                24 heures ou moins (+ $750 )
                            </label>
                            <p>Faites-le livrer en un jour!</p>
                          </div>
                    </div>
                </div>
            </div>

            <div class="container paiementCmmantaire-top">
                <div class="paragrapheCommantaire">
                    <div class="paiementMargeine">
                        <img src={iconePaie} alt="" class="paiementImage"/>
                        <div>
                            <hr class="hr"/>
                        </div>
                        <div class="paiementCommande">
                            <h1>Résumé de la commande</h1>

                            <p>Deober classique ............................................................................................................. <strong  class="rrr">25.000 F CFA</strong> </p>
                            <p>Service gratuit .............................................................................................................. <strong  class="rrr">25.000 F CFA</strong> </p>
                            <div>
                                <p>Code promo :  </p>
                            </div>
                            
                        </div>
                        <div>
                            <hr class="hr"/>
                        </div>
                        <div class="paiementTotal">
                            <p>
                                Total de la commande <strong class="rrr">50.000 F CFA</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container paiementCmmantaire-top">
            
                <div class="paragrapheCommantaire">
                    <div class="paiementMargeine">
                        <ul class="v-effect-link">
                        <li><a href="#"><img src={mtn} alt=""/></a></li>
                        <li><a href="#"><img src={orange} alt=""/></a></li>
                        <li><a href="#"><img src={moov} alt=""/></a></li>
                    </ul>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-2 mobiles"><i class="fas fa-mobile-alt"></i></div>
                        <div class="col-10"><input type="text" placeholder="00225 05 644 360 15" class="input"/></div>
                    </div>
                </div>
            </div>
            </div>
            
        </main>
        </Main>
    )
}
