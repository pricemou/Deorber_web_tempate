import styled from "styled-components";

export const Main = styled.div`

.box_lists figure .preview span {
  background-color: #fcfcfc;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  border-radius: 20px;
  display: inline-block;
  color: #222;
  font-size: 0.75rem;
  padding: 5px 15px;
}
.box_list ul li:last-child a:hover {
  background: #e74e84;
  color: #fff;
}
.box_list.home ul li:first-child, .box_list.home ul li:nth-child(2), .box_list.home ul li:last-child {
  display: inline-block;
}

/* -------------------------------------------------------- */
/*------------------------------------------------- */

/* -------------------------------------- */
/* -------------------------------------- */

.box_lists {
  background-color: #fff;
  display: block;
  position: relative;
  margin-bottom: 30px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
}
@media (max-width: 991px) {
  .box_lists {
    /* For less than 991px */
    min-height: inherit;
  }
}
@media (max-width: 767px) {
  .box_lists figure {
    /* For less than 767px */
    height: 280px;
  }
}
.box_lists figure .preview {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -12px;
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
  transform: translateY(10px);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
  z-index: 2;
}
.box_lists figure .preview span {
  background-color:  ${(props) => props.theme.body};
  border:  ${(props) => props.theme.fontColor};
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  border-radius: 20px;
  display: inline-block;
  color: #222;
  font-size: 0.75rem;
  padding: 5px 15px;
}
.box_lists figure:hover .preview {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.box_lists figure a img {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.box_lists figure a:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

.box_lists figure {
  margin-bottom: 0;
  overflow: hidden;
  position: relative;
  -webkit-border-radius: 5px 5px 0 0;
  -moz-border-radius: 5px 5px 0 0;
  -ms-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 240px;
}
@media (max-width: 767px) {
  .box_lists figure {
    /* For less than 767px */
    height: auto;
  }
}
.box_lists figure .preview {
  position: absolute;
  top: 90%;
  left: 0;
  margin-top: -12px;
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
  transform: translateY(10px);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
  z-index: 2;
}
.box_lists figure .preview span {
    background-color:  ${(props) => props.theme.fontwhite};
  /* border: 1px solid  ${(props) => props.theme.fontColor}; */
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  border-radius: 5px;
  display: inline-block;
  color: #3faba0;
  font-size: 0.75rem;
  padding: 5px 15px;
  font-weight: 900;
}
.box_lists figure .preview span i{
  margin-right: 7px;
  font-size: 15px;
  margin: 3px;
  margin-right: 7px;
  
}


.box_lists figure .preview {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}

/* .box_lists figure:hover .preview {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
} */
.box_lists figure a img {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.box_lists figure a:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.box_lists .wrapper {
  padding: 25px;
  background-color:${(props) => props.theme.body};
}
.box_lists .wrapper h3 {
  font-size: 1.25rem;
  margin-top: 0;
}
@media (max-width: 767px) {
  .box_lists .wrapper p {
    /* For less than 767px */
    font-size: 13px;
    font-size: 0.8125rem;
  }
}
.box_lists small {
  text-transform: uppercase;
  color: #999;
  font-weight: 600;
}
.box_lists ul {
  width: 100%;
  padding: 20px 15px;
  border-top: 1px solid #ededed;
}
@media (max-width: 991px) {
  .box_lists ul {
    /* For less than 991px */
    position: static;
  }
}
.box_lists ul li {
  display: inline-block;
  color: #999;
  font-weight: 500;
}
.box_lists ul li i {
  margin-right: 5px;
  font-weight: 500;
}
@media (max-width: 767px) {
  .box_lists ul li:first-child {
    /* For less than 767px */
    display: none;
  }
}
.box_lists ul li:nth-child(2) {
  display: none;
}
@media (max-width: 767px) {
  .box_lists ul li:nth-child(2) {
    /* For less than 767px */
    display: inline-block;
  }
}
.box_lists ul li a {
  color: #999;
  font-weight: 500;
}
.box_lists ul li a:hover {
  color: #e74e84;
}
.box_lists ul li:last-child {
  margin-right: 0;
  float: right;
}
.box_lists ul li:last-child a {
  background: #fff;
  border: 2px solid #e74e84;
  color: #e74e84;
  padding: 5px 20px;
  font-weight: 500;
  line-height: 1;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  border-radius: 30px;
}
.box_lists ul li:last-child a:hover {
  background: #e74e84;
  color: #fff;
}
.box_lists.home ul li:first-child, .box_lists.home ul li:nth-child(2), .box_lists.home ul li:last-child {
  display: inline-block;
}

.listeAllMusic{
    width: 300px;
    height: 240px;
}



.tandance h1{
    padding: 14px;
    text-align: center;
    font-size: 33px;
    font-weight: 600;
    color: #3faba0;
}

.tandance ul {
    text-align: right;
    margin-top: 13px;
    padding: 5px;
  }

.tandance ul li{
    display: inline;
    padding: 10px;
    font-size: 11px;
    height: 111%;
    border: 1px solid white;
}

.tandance ul li i{
    font-size: 15px;
    color: white;
}



.filtre-cacher{
    background: #b8b9be;
    color: black;

    &:hover{
      background-color:black ;
      color: white;
    }
}

.filtre-effacer{
    background: #b8b9be;
    color: black;

    &:hover{
      background-color:black ;
      color: white;
    }
}

.section-tadance {
    padding: 26px;
    background: ${(props) => props.theme.sectionTandance};
    border: 1px solid ${(props)=> props.theme.sectionTandanceBorder};
    margin: 3px
}
.tandance hr
{
    margin: 15px 0 13px 0;
    border-color: #baa9a9;
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

.paginalisation ul{
    text-align: center;
    display: inline-flex;
    margin: revert;
}
.paginalisation ul li i{
    font-size: 32px;
    padding: 1px;
}
.paginalisation{
    margin-left: auto;
    margin-right: auto;
    width: 11em;
}
.paginalisation .page{
    padding: 8px;
    width: 101px;
}
.labels{
    margin-left: 12px;
    font-size: 14px;
    color: #666
}

.box_list_01 .wrapper {
    padding: 0px;;
}
.box_list_01 small {
    text-transform: uppercase;
    color: #999;
    font-weight: 600;
}
`;

export const Wrapper = styled.div`
    background: url(${({ image }) => image});
`;


export const Context = styled.div``;


