import styled from "styled-components";

export const Main = styled.div`
.nav_container{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #242736;
}

.navs {
    /* background: #242736; */
    min-height: 53px;
    overflow: auto;
}
.navs ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin: auto;
}
.navs li {
    float: left;
}

.navs-mobile{
    margin-left: 8%;
}

.navs-mobile a {
    display: block;
    padding: 9px 6px;
    line-height: 27px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
}
div .navs-mobile ul li i {
    font-size: 28px;
}
 
.listeAllMusic{
    width: 300px;
    height: 240px;
}


.section-tadance h2{
    font-size: 18px;
    color: #595656;
}
.Checkbox{
    margin-left: 18px;
}

.Checkbox i{
    color: #3faba0;
    font-size: 17px;
    padding: 3px;
}

.labels{
    margin-left: 12px;
    font-size: 14px;
    color: #666
}

.container-s{
    margin-bottom: 99px
}

.progressbar {
    counter-reset: step;
}

.progressbar li{
    list-style-type: none;
    float: left;
    width: 33.33%;
    position: relative;
    text-align: center;
}

.progressbar li:before{
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #dddd;
    display: block;
    text-align:center;
    margin: 0 auto 18px auto;
    border-radius: 58%;
    background-color: white;
}

.progressbar li:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    background-color: #ddd;
    top: 13px;
    left: -50%;
    z-index:-1;
}

.progressbar li:first-child:after{
    content: none;
}

.progressbar li.active{
    color: #3faba0;
}

.progressbar li.active:before{
  border-color: #3faba0;
}

.progressbar li.active + li:after{
  background-color: #3faba0;
}

.paiementCardes {
    margin-left: 10%;
    padding: 12px;
    width: 89%;
}

.paiementCmmantaire-top{
    max-width: 977px;
    
    h1{
        font-size: 23px;
        font-weight: 700;
    }
    .paragrapheCommantaire{
        /* background: #dfdfdf; */
        background: ${(props) => props.theme.sectionTandance}     ;
        padding: 27px;
        border-radius: 21px; 
        border: 1px solid ${(props) => props.theme.sectionTandanceBorder};

        .paiementMargeine{
            margin: 10px;

            .paiement{
                font-size: 17px;
                font-weight: 700;
            }
        }

    }

    .v-effect-link {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .v-effect-link li {
            display: inline-block;
            min-width: 5em;
            margin: 0 0.5em;
    }
    .v-effect-link a {
            text-decoration: none;
            display: block;
            font-family:Arial;
            position: relative;
            color: 1px solid ${(props) => props.theme.sectionTandanceBorder};;
            padding:.5em 0
    }

    .v-effect-link img{
            width: 88px;
    }

    .v-effect-link p{
        font-size: 12px;
        color: black;
    }

    .input{
    background: #d9d4d4;
    border: 1px solid #d9d4d4;
    height: 29px;
    font-size: 13px;
    }

  
    /* Methode de paiement */
    .form-control{
    background:  ${(props) => props.theme.textarea};;
    color: #6f787d;
    }

    #exampleInputPassword1{
        background: ${(props) => props.theme.sectionTandance};

        font-size: 14px;
        font-weight: 400;
        /* color: #1e266d; */
        border: 0;
        border-radius: 0;
        border-bottom: 1px solid ${(props) => props.theme.paiementBorder};
        
    }
    .t{
        margin-top: 34px;
    }

    label{
        margin: 0px;
        color: #898585;
        font-size: 13px;
    }
    .borderTera{
    border: 1px solid #333;
    }

    .form-floating strong{

    }
    .paiementCardes{
        margin-left: 10%;
        padding: 12px;
        width: 89%;
    }

    .form-floating .top{
    
    }
    .textarea{
        height: 100px;
        background: ${(props) => props.theme.textarea};
        border-radius: 5px;
        border: 1px solid #bcbcbc;
    }

    .textareas{
    height: 20px;
    background: ${(props) => props.theme.textarea};
    border-radius: 5px;
    border: 1px solid #bcbcbc;
    }

    .labeltextarea{
        margin-top: 9px;
        margin-bottom: 6px;
        color: black;
        font-size: 12px;
    }

}

.paimentContinue{
        width: 393px;
        height: 35px;
        margin: 0 auto;
        background: #242736;
        margin-top: 34px;
        margin-bottom: 12px;
        
    }
    .paimentContinue p{
    text-align: center;
    padding: 7px;
    }

    .paimentContinue p a{
    color: white;
    text-decoration: none;
    }

`;

export const Wrapper = styled.div`
    background: url(${({ image }) => image});
`;


export const Context = styled.div`
    background: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 26rem; 
`;