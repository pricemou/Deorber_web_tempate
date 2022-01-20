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
.paiementCardes {
    margin-left: 10%;
    padding: 12px;
    width: 83%;
}
.contour {
    background-color: #cccccc;
    border-radius: 12px;
    padding: 14px;
}
.enregistrements {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 25px;
}
.contour h3 {
    font-size: 12px;
    color: #333;
}
.contour p {
    font-size: 13px;
    color: #555;
}
.th {
    margin-top: 16px;
}
.ty {
    width: 389px;
    font-size: 21px;
    padding: 13px;
    background: #fcdede;
    height: 52px;
    color: black;
    font-weight: 800;
    border-radius: 12px;
}
.ty i {
    color: #f60606;
    width: 30px;
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