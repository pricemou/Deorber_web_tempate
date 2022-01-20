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
.tt{
    margin-top: 36px;
}

.tt .profile{
    margin: 40px;
    margin-top: 98px;
    padding: 21px;
    height: 243px;
    z-index: 1;
    margin-left: 68px;
    border-radius: 126px;
}
.tt .nom h2 {
    font-size: 24px;
    font-weight: 400;
}
.tt .nom h3 {
    font-size: 12px;
    color: #74747669;
}
.pr{
    font-size: 14px;
    color: #8a8d8c;
    line-height: 25px;
    margin-bottom: 0px;
  }
  
.pr i{
    color: #3faba0;
    width: 21px;
  }
.connecter i{
    font-size: 10px;
    text-align: center;
    margin-top: 4
}
.connecter i {
    font-size: 30px;
}

.prive{
    text-align: center;
    font-size: 16px;
    white-space: revert;
}
  
.prive i{
    width: 36px;
}

.paragrapheCommantaire .Commente{
    font-size: 12px;
    font-weight: 500;
}  

.avis .container .commantaire{
    font-weight: bolder;
    font-size: 17px;
}

.paragrapheCommantaire{
    background: #dfdfdf;
    padding: 27px;
    border-radius: 21px;
}

.validers {
    text-align: right;
    margin-top: 34px;
}

.validers i {
    font-size: 32px;
    color: #3faba0;
}

.test {
    font-size: 12px;
}

.video {
    margin-top: 10px;
    padding: 28px;
}

.commandeVide strong {
    border-radius: 14px;
    width: 34px;
    padding: 4px;
    color: white;
    font-size: 17px;
    background: black;
    height: 22px;
    margin-left: 22px;
}

.commandeVide i {
    font-size: 25px;
}

.commandeVide {
    margin-bottom: 10px;
    font-size: 23px;
}

.viedoTest {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 0px;
}  

.viedoTest i {
    color: #3faba0;
    width: 23px;
}     

.texth3 {
    font-size: 17px;
    color: #998f8f;
}


element.style {
}
.link li {
    display: inline-block;
    min-width: 5em;
    margin: 0 0.5em;
}
.Consulter {
    background: #8f9097;
    text-align: center;
    color: #0f0e0e;
    font-weight: 900;
    /* font-size: 53px; */
    height: 49px;
    width: 109px;
    border-radius: 6px;
}

.link li {
    display: inline-block;
    min-width: 5em;
    margin: 0 0.5em;
}
.link a {
    text-decoration: none;
    display: block;
    font-weight: bolder;
    font-family: Arial;
    position: relative;
    color: black;
    padding: .5em 0;
    font-size: 19px;
}
.tr {
    padding: 2px;
    margin: 0px;
    margin-top: 12px;
    width: 92%;
    /* text-align: center; */
    margin-left: 51px;
}

.link i {
    color: #e64225;
}

.tts {
    text-align: right;
    color: #555
}


`;


export const Wrapper = styled.div`
    background: url(${({ image }) => image});
`;


export const Context = styled.div`
    background: url(${({ image }) => image});
    background-repeat: no-repeat;
    repeat center bottom;
    background-position: left;
    background-size: 26rem;
`;