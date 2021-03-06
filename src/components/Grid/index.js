import React from 'react'

// Style 
import {Wrapper, Context} from './Grid.styles'

import fImage from '../../Image/Groupe1.png'
import maitre from '../../Image/gims.jpg'

const Grid = () => {
    return (
        <Wrapper className="container margin_60_35">
            <Context className="row">
                <div className="col-lg-12">
                    <div className="">
                        <h2 className="titrecategorie">Catégories</h2>
                        <p className="voirPlus">Voir tout </p>
                    </div>
                    <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={fImage} alt={"business"} class="img-fluid listeCategorie" />
                                            <div class="preview"><span>Show business</span></div>
                                        </a>
                                    </figure> 
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={fImage} alt={"snapchat"} class="img-fluid listeCategorie" />
                                            <div class="preview"><span>Snapchat</span></div>
                                        </a>
                                    </figure> 
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={fImage} alt={"fecebook"} class="img-fluid listeCategorie" />
                                            <div class="preview"><span>Fecebook</span></div>
                                        </a>
                                    </figure> 
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={fImage} alt={"tiktok"} class="img-fluid listeCategorie" />
                                            <div class="preview"><span>Tiktok</span></div>
                                        </a>
                                    </figure> 
                                </div>
                            </div>
                        </div>


                        {/* -------------------------------------------------------------------- */}
                        {/* tandance */}
                        {/* -------------------------------------------------------------------- */}


                        <div >
                            <h2 class="titrecategorie">Tandance</h2>
                            <p className="voirPlus">Voir tout </p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"gims"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure> 

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"snapchat"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i> 1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"fecebook"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-6">
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

                         {/* -------------------------------------------------------------------- */}
                        {/* Comédiens */}
                        {/* -------------------------------------------------------------------- */}

                        <div >
                            <h2 class="titrecategorie">Comédiens</h2>
                            <p className="voirPlus">Voir tout </p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"gims"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure> 

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"snapchat"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i> 1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"fecebook"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-6">
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

                      {/* -------------------------------------------------------------------- */}
                        {/* Createurs */}
                        {/* -------------------------------------------------------------------- */}

                        <div >
                            <h2 class="titrecategorie">Createurs</h2>
                            <p className="voirPlus">Voir tout </p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"gims"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure> 

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"snapchat"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i> 1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"fecebook"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-6">
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
                     {/* -------------------------------------------------------------------- */}
                        {/* Athlètes */}
                        {/* -------------------------------------------------------------------- */}

                        <div >
                            <h2 class="titrecategorie">Athlètes</h2>
                            <p className="voirPlus">Voir tout </p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"gims"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure> 

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"snapchat"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i> 1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={maitre} alt={"fecebook"} class="img-fluid listeAllMusic" />
                                            <div class="preview"><span><i class="fas fa-film"></i>1000 Fcfa</span></div>
                                        </a>
                                    </figure>

                                    <div class="wrapper">
                                        <small>Music</small>
                                        <h3>Maitre Gims</h3>
								    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-6">
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
            </Context>
        </Wrapper>
    )
}

export default Grid
