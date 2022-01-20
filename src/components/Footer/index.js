import React from 'react';

//styles
import { Context, Wrapper, TestP } from './Footer.Styles';

// Composent
// Image 
import footerLogo from '../../Image/icon_footer.png'


export const Footer = () => (
    <Wrapper>
        <Context className="container" >
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                        <TestP>
                            <a href="index.html" title="Deober">
                                <img src={footerLogo} data-retina="true" alt={"icon_footer"} width="150" height="36" class="img-fluid"/>
                            </a>

                            <p>rem ITestsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>
                        </TestP>
                </div>

                <div className="col-lg-6 col-md-4 disableds">
                    
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <h5>Devenir un talent sur <strong>Deober</strong></h5>

                    <p className="talent">Je deviens un talent</p>
                    <h3 className="newsletter">Deober newsletter</h3>

                    <form action="#" className="row">
                        <div className="footerEmail col-8"> 
                            <input type="email" className="foote-email" placeholder="Adresse mail"/>
                        </div>
                        <div className="col-2">
                            <a href=""><i className="fas fa-arrow-right white"></i></a>
                        </div>
                    </form>
                </div>
            </div>

            <hr/>

            <div class="row">

                <div class="col-md-4">
                    <div class="follow_us">
                        <ul>
                            <li><a href=""><p>Suivez-nous</p></a></li>
                            <li><a href="#0"><i class="social_facebook"></i></a></li>
                            <li><a href="#0"><i class="social_twitter"></i></a></li>
                            <li><a href="#0"><i class="social_linkedin"></i></a></li>
                            <li><a href="#0"><i class="social_instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8">
				    <div id="copy">© 2020-2021 <strong class="copy">Deober </strong> .Tout droits réservés</div>
			    </div>
            </div>

        </Context>
    </Wrapper>
)
