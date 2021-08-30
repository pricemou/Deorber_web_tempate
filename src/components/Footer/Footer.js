import React from 'react';
import icon_footer from '../../scenes/img/icon_footer.png';

const Footer = () => {
    return (
        <footer>
            <div class="container margin_60_35">
                <div class="row">
                    <div class="col-lg-3 col-md-12">
                        <p>
                            <a href="index.html" title="Deober">
                                <img src={icon_footer} data-retina="true" alt={"icon_footer"} width="150" height="36" class="img-fluid"/>
                            </a>

                            <p class="footer-text">rem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>
                        </p>
                    </div>

                    <div class="col-lg-3 col-md-4">
				    </div>

                    <div class="col-lg-3 col-md-4">
                    </div>

                    <div class="col-lg-3 col-md-4">
                        <h5>Devenir un talent sur <strong>Deober</strong></h5>

                        <p class="talent">Je deviens un talent</p>
                        <h3 class="newsletter">Deober newsletter</h3>

                        <form action="#" class="row">
                            <div class="footerEmail col-xl-8"> 
                                <input type="email" class="foote-email" placeholder="Adresse mail"/>
                            </div>
                            <div class="col-xl-2">
                                <a href=""><i class="fas fa-arrow-right white"></i></a>
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
            </div>
        </footer>
    )
}

export default Footer;
