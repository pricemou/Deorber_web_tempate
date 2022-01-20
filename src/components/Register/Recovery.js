import React from 'react';

// Image
import fImage from '../../Image/Groupe1.png'

// Styles
import { Main ,Wrapper, Context} from './Register.style'

export const Recovery = () =>(
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

                                <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label for="email" className="labeText">Email</label>
                                                    <input type="text" className="form-control" placeholder="Helloistiakgmail@gamil.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submits" className="btn-valide">Envoyer</button>
                                </form>

                                <div classNameName="row">
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