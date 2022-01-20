import React from 'react';


// Styles
import { Main ,Wrapper, Context} from './Register.style'

// Composents

// Image 
import fImage from '../../Image/Groupe1.png'

export const Signup = () => (
    <Wrapper image={fImage} > 
                <Context className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="deoberPosition">
                                <img src="img/logo.png" alt="" className="logoDeobers"/>
                            </div>
                        </div>

                        <div className="col-lg-5 ml-auto contacTail">
                            <div className="box_form">
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <h1 className="seConnecter">Se connecter</h1>
                                        <p className="seConnecter-text">Book personalize video shoutout from your people</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <button type="submits" id="form-submit" className="btn-actions-fecebook">
                                            <i className="fab fa-facebook-f fecebookIcon appleIcon"></i>Continuer avec Facebook
                                        </button>
                                        <button type="submits" id="form-submit" className="btn-actions-apple">
                                            <i className="fab fa-apple appleIcon"></i>Continuer avec Apple
                                        </button>
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
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <p className="connecter">Vous n'avez pas encore un compte ? <strong>Créer un compte</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Context>
            </Wrapper>
)