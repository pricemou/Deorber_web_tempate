import React from 'react'

// Styles
import '../Profile/Profile.styles.css'
import {Main,Wrapper} from './Tendance.style.js'
import {Bar} from '../NavBar/Bar'


//Image
import fImage from '../../Image/99.png'
import O31 from '../../Image/031.png'
import icon from '../../Image/icon.png'
import logo from '../../Image/logo.png'
import maitre from '../../Image/gims.jpg'


export const Tendance = () => {
    return (
        <Main>
            <Wrapper image={fImage} className="hero_home_tendance version_3">
                <div className="ttx">  
                </div>
            </Wrapper>

            <Bar/>

            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div class="tandance"><h1>Tendance</h1>
                            <div class="section-tadance">
                                <h2>Regrouper par</h2>

                                <div>
                                    <input type="radio" id="huey" name="drone" value="huey"	checked/>
                                    <label for="huey" className="labels">Les plus recommandé</label>
                                </div>

                                <div>
                                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                                    <label for="dewey" className="labels">Prix : Elevé - Petit</label>
                                </div>

                                <div>
                                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                                    <label for="dewey" className="labels">Prix : Petit - Elevé</label>
                                </div>

                                <div>
                                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                                    <label for="dewey" className="labels">Plus commentés</label>
                                </div>

                                <div>
                                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                                    <label for="dewey" className="labels">Avis</label>
                                </div>
                                <div>
                                    <hr/>
                                </div>

                                <h2>Livraison en 24h</h2>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels " for="exampleCheck1"><i class="fas fa-film"></i>Vidéo en 24h</label>
                                </div>
                                <div>
                                    <hr/>
                                </div>

                                <h2>Business Deober</h2>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1"><i class="fas fa-briefcase"></i>Deober Business</label>
                                </div>
                                <div>
                                    <hr/>
                                </div>
                                <h2>Liste de prix</h2>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">0 F - 10.000 F</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">0 F - 10.000 F</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">0 F - 10.000 F</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">0 F - 10.000 F</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">0 F - 10.000 F</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">0 F - 10.000 F</label>
                                </div>
                                <div>
                                    <hr/>
                                </div>

                                <h2>Avis</h2>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">5 Plus de cinq étoiles</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">4 Plus de cinq étoiles</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">3 Plus de cinq étoiles</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">2 Plus de cinq étoiles</label>
                                </div>
                                <div class="Checkbox">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label labels" for="exampleCheck1">1 Plus de cinq étoiles</label>
                                </div>
                                <div>
                                    <hr/>
                                </div>

                                    <h2>Commentaires</h2>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1">10 000 +</label>
                                    </div>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1">10 000 +</label>
                                    </div>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1">10 000 +</label>
                                    </div>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1">10 000 +</label>
                                    </div>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1">10 000 +</label>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>

                                    <h2>Temps de reponses</h2>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1"> 1 jour</label>
                                    </div>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1"> 1 jour</label>
                                    </div>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1"> 1 jour</label>
                                    </div>
                                    <div class="Checkbox">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label labels" for="exampleCheck1"> 1 jour</label>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9">
					    <div class="tandance">
                            <ul>
                                <li class="filtre-cacher">Cacher le filtre <i class="fas fa-filter"></i></li>
                                <li class="filtre-effacer">Effacer le filtre <i class="fas fa-filter"></i></li>
                            </ul>
                        </div>

                        <div className="row">

                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="row">

                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"tiktok"} class="img-fluid listeAllMusic" />
                                                <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Psicologist</small>
                                            <h3>Maitre Gims</h3>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                
                </div>

            </div>
            
        </Main>
    )
}
