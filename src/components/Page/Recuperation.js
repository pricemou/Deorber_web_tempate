import React from 'react'
import Footer from '../Footer/Footer';
import NavabaMenu from '../Menu/NavabaMenu';

const Recuperation = () => {
    return (
        <div>
            <NavabaMenu/>
            <main>
                <div id="hero_register">
                    <div class="container margin_120_95">
                        <div className="row">
                            <div class="col-lg-6">
                                <div class="deoberPosition">
                                    <img src="img/logo.png" alt="" class="logoDeobers"/>
                                </div>
                             </div>

                             <div class="col-lg-5 ml-auto bg-white contacTail">
                                <div class="box_form">

                                    <div class="row">
                                        <div class="col-lg-12 ">
                                            <h1 class="seConnecter">Récupération</h1>
                                            <p class="seConnecter-text">Book personalize video shoutout from your people</p>
                                         </div>
                                    </div>

                                    <form id="contactForm">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email" class="labeText">Email</label>
                                                    <input type="text" class="form-control" placeholder="Helloistiakgmail@gamil.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submits" class="btn-valide">Envoyer</button>
                                    </form>

                                    <div class="row">
                                    <div class="col-lg-12 ">
                                        <p class="connecter">Vous n'avez pas encore un compte ? <strong>Créer un compte</strong></p>
                                    </div>
							</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Recuperation
