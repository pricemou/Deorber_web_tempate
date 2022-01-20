import React from 'react';

// Style
import {Wrapper,Context,Main} from './Createur.styles.js'

//Image
import fImage from '../../Image/99.png'
import O31 from '../../Image/031.png'
import icon from '../../Image/icon.png'
import logo from '../../Image/logo.png'
import orange from '../../Image/orange-money.jpg'

export const Createur = () => {
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

            <div className="paiementCardes">
                <div class="container paiementCmmantaire-top">
                    <h1 className="commantaire">Information de paiement</h1>
                    <div className="paragrapheCommantaire">
                        <div className="paiementMargeine">
                            <h1 class="paiement">A qui s'adresse cette vidéo ?</h1>

                                <ul class="v-effect-link">
                                    <li><a href="#"><img src={orange} alt=""/><p>Quelqu'un d'autre</p></a></li>
                                    <li><a href="#"><img src={orange} alt=""/><p>Moi meme</p></a></li>
                                    <li><a href="#"><img src={orange} alt=""/><p>Marque/ Entreprise</p></a></li>
                                </ul>
                        </div>
                        <div className="container">
                        <form>
                            <div class="form-group">
                                <label class="label" for="exampleInputEmail1">A</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>

                            <div class="form-group">
                                <label class="label" for="exampleInputPassword1">De</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Barry Hassan"/>
                            </div>

                            <div class="form-group label">
                            <label class="label" for="exampleInputPassword1">Message</label>
                                <select id="exampleInputPassword1"  class="form-control form-control-sm">
                                    <option>Small select</option>
                                </select>
                            </div>

                            <div class="form-group label">
                            <label class="label" for="exampleInputPassword1">Langue souhaitée</label>
                                <select id="exampleInputPassword1"  class="form-control form-control-sm">
                                    <option>Small select</option>
                                </select>
                            </div>

                            </form>
                        </div>
                    </div>


                    <div class="container paiementCmmantaire-top t">
                        <div className="paragrapheCommantaire">
                            <div className="paiementMargeine">
                                <h1 class="paiement">Sélectionnez l'occasion</h1>
                                <ul class="v-effect-link">
                                        <li><a href="#"><img src={orange} alt=""/><p>Quelqu'un d'autre</p></a></li>
                                        <li><a href="#"><img src={orange} alt=""/><p>Moi meme</p></a></li>
                                        <li><a href="#"><img src={orange} alt=""/><p>Marque/ Entreprise</p></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div class="container paiementCmmantaire-top t">
                        <div class="paragrapheCommantaire">
                        <div class="paiementMargeine">
                        <h1 class="paiement">Sélectionnez l'occasion</h1>
                        <div>
                            <label for="" class="labeltextarea">Que voulez-vous que <strong>Emma Lohoues</strong>  connaisse du destinataire?</label>
                            <div class="form-floating top">
                                <textarea class="form-control textarea " placeholder="Mettez les détails ici" id=""></textarea>
                            </div>
                        </div>

                        <div>
                            <label for="" class="labeltextarea">Que voulez-vous que <strong>Emma Lohoues</strong>  connaisse du destinataire?</label>
                            <div class="form-floating top">
                                <textarea class="form-control textarea " placeholder="Mettez les détails ici" id=""></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>

                        <div class="paiementMargeine-talle">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Masquer cette vidéo dans le profil de Emma Lohoues
                            </label>
                          </div>
                    </div>
                    </div>
                        </div>
                    </div>
                </div>        
            </div>


            <div>
                <div class="paimentContinue">
                    <p><a href="">Continuer</a></p>
                </div>
              </div>

        </Main>
    )
}

