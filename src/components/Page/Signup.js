import React from 'react'
import NavabaMenu from '../Menu/NavabaMenu'
import Footer from '../Footer/Footer'

const Signup = () => {
    return (
        <div>
            <NavabaMenu/>
            <main>
                <div id="hero_register">
                    <div class="container margin_120_95">			
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="deoberPosition">
                                    <img src="img/logo.png" alt="" class="logoDeobers"/>
                                </div>
                            </div>
                            <div class="col-lg-5 ml-auto bg-white contacTail">
                                <div class="box_form">
                                    <div class="row">
                                            <div class="col-lg-12 ">
                                                <h1 class="seConnecter">Se connecter</h1>
                                                <p class="seConnecter-text">Book personalize video shoutout from your people</p>
                                            </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12 ">
                                            <button type="submits" id="form-submit" class="btn-actions-fecebook"><i class="fab fa-facebook-f fecebookIcon appleIcon"></i>Continuer avec Facebook</button>
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

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email" class="labeText">Nom d'ulisateur</label>
                                                    <input type="text" class="form-control" placeholder="Helloistiak"/>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email" class="labeText">Date de naissance</label>
                                                    <input type="text" class="form-control" placeholder="10/01/1997"/>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email" class="labeText">Password</label>
                                                    <input type="text" class="form-control" placeholder="..........."/>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email" class="labeText">Code d'invitation(Optionel)</label>
                                                    <input type="text" class="form-control" placeholder="08887908"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submits" class="btn-valide">Créer un compte</button>
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

export default Signup
