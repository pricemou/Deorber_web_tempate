import styled from "styled-components";



export const Main = styled.div`

.nav_container{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;nav_container
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
.container-s{
    margin-bottom: 99px
}

.paiementCarde{
    margin-left: 13%;
    padding: 12px;
    width: 77%;
}

.commantaire{
  font-size: 22px;
  font-weight: bold;
  color: #242736;

}
.paiement{
  font-size: 18px;
  font-weight: bold;
  color: #242736;
}

.paiementCommantaire {
    margin-top: 12px;
}

.paragrapheCommantaire {
    background-color:${(props) => props.theme.sectionTandance};
    padding: 27px;
    border-radius: 21px;
    border: 1px solid ${(props) => props.theme.fontwhite};
}
.paiementMargeine {
    margin: 10px;
}

.form-check p{
  font-size: 9px;
  color: #333 ;
}
.paiementMargeine{
  margin: 23px;
}

.paiementMargeine{
  margin:10px;
}
.paragrapheCommantaire{
  font-size: 9px;
}
.paiementCmmantaire-top p{
  margin-bottom: 7px;
}

.form-check {
  font-size: 12px;
    color: black;
}
.paimentTop{
  margin-top: -15px;
}
.paiementCommande p{
  font-size: 15px;
}

.paiementCommande h1{
  font-size: 17px;
}
.rrr{
  float: right;
}

.hr{
  margin: 9px 0 11px 0;
  border-color: #c0bebe;
}
.paiementTotal p{
  font-size: 15px;
  color: #262525;
  font-weight: 700;
}

.paiementImage{
  width: 84px;
}

.paiementCmmantaire-top{
  margin-top: 42px;
}

.v-effect-link {
  list-style-type: none;
  /* margin: 0;
  padding: 0; */
  text-align: center;
}
.v-effect-link li {
  display: inline-block;
  min-width: 16em;
  width: 12px;
  /* margin: 0 0.5em; */
}

.v-effect-link li a img{
  width: 68px;
}

.v-effect-link a {
  text-decoration: none;
  display: block;
  font-family:Arial;
  position: relative;
  color: black;
  /* padding:.5em 0 */
}
.v-effect-link a:hover {
  color: #c69f73;
  background-color: rgb(77, 75, 75);
}

.input{
  background: #d9d4d4;
  border: 1px solid #d9d4d4;
  height: 29px;
  font-size: 13px;
}
.mobiles{
  font-size: 57px;
  margin-top: -25px;
  text-align: right;
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