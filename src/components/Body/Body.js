import React from 'react';
import business from '../../scenes/img/show-business.jpg';
import snapchat from '../../scenes/img/snapchat.jpg';
import fecebook from '../../scenes/img/fecebookGroupe.jpg';
import tiktok from '../../scenes/img/tiktok.jpg';
import gims from '../../scenes/img/gims.jpg';




const Body = () => {
    return (
        <main>
            <div className="container margin_60_35_1">
                <div className="row">
                    <div className="col-lg-12">

                    {/* -------------------------------------------------------------------- */}
                    {/* Catégories */}
                    {/* -------------------------------------------------------------------- */}


                        <div >
                            <h2 class="titrecategorie">Catégories</h2>
                            <p className="voirPlus">Voir tout</p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={business} alt={"business"} class="img-fluid listeCategorie" />
                                            <div class="preview"><span>Show business</span></div>
                                        </a>
                                    </figure> 
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={snapchat} alt={"snapchat"} class="img-fluid listeCategorie" />
                                            <div class="preview"><span>Snapchat</span></div>
                                        </a>
                                    </figure> 
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={fecebook} alt={"fecebook"} class="img-fluid listeCategorie" />
                                            <div class="preview"><span>Fecebook</span></div>
                                        </a>
                                    </figure> 
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="box_list">
                                    <figure>
                                        <a href="">
                                            <img src={tiktok} alt={"tiktok"} class="img-fluid listeCategorie" />
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
                            <p className="voirPlus">Voir tout</p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={gims} alt={"gims"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"snapchat"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"fecebook"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"tiktok"} class="img-fluid listeAllMusic" />
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
                            <p className="voirPlus">Voir tout</p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={gims} alt={"gims"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"snapchat"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"fecebook"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"tiktok"} class="img-fluid listeAllMusic" />
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
                            <p className="voirPlus">Voir tout</p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={gims} alt={"gims"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"snapchat"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"fecebook"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"tiktok"} class="img-fluid listeAllMusic" />
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
                            <p className="voirPlus">Voir tout</p>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="box_lists">
                                    <figure>
                                        <a href="">
                                            <img src={gims} alt={"gims"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"snapchat"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"fecebook"} class="img-fluid listeAllMusic" />
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
                                            <img src={gims} alt={"tiktok"} class="img-fluid listeAllMusic" />
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
        </main>
    )
}

export default Body
