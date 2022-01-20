import styled from "styled-components";

export const Header = styled.div`
    padding: 8px 16px;
    box-shadow: 1px 0px 3px 2px ${(props) => props.theme.fontNavbar};
    background-color: ${(props) => props.theme.fontwhite};
`;



export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
    padding-bottom: .5rem;
    
    display: flex;
    justify-content: space-between;

`;

export const ContextRight = styled.div`

`;
export const ContextLeft  = styled.div`
    display: block;

    ul{
        list-style: none;
        display: flex;
        justify-content: flex-end;

        li{
            margin: 0px 8px;

            form{
                display: block;
                margin-top: 0em;
                /* background-color: black; */

                span{
                    position: absolute;
                    z-index: 2;
                    display: block;
                    width: 2.375rem;
                    height: 2.375rem;
                    line-height: 2.375rem;
                    text-align: center;
                    pointer-events: none;
                    color: #aaa;
                }
                input{
                    padding-left: 2.375rem;
                }
            }

            a{
                color: black;
                text-decoration: none;
                font-family: "Quicksand", sans-serif;
                text-transform: uppercase;
                font-size: 0.8rem;
                font-weight: 700;
                transition: all .3s ease-in-out;
            }

            i{
                font-size: 20px;
                margin-top: 7px;
                color: ${(props) => props.theme.fontColor};
            }

        }
        
    }
    

    button{
        display: none;
    }

`;


export const Image = styled.img`
    width: 120px;
`;

export const Bars = styled.div`

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

    &:hover{
        color: #3faba0;
        font-weight: bold;
        ont-size: 16px;
    }
}

`;
