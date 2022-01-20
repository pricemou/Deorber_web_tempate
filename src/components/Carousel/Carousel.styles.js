import styled from "styled-components";



export const Main =styled.main`
    position: relative;
    z-index: 1;
`;

export const Wrapper = styled.div``;

export const Context = styled.div`
    background:  url(${({ image }) => image}) no-repeat  ;
    color: black;
    background-size: 50%;

    .demandeVideo{
        text-align: center;
        height: 79px;
        color: white;
        
        .container{
            width: 498px;
            padding: 0px;
            border-radius: 5px;
        }

        .demanderMaintnant{
            list-style-type: none;
            margin: 0;
            padding: 0;
            text-align: center;
            background: #242736;
            
            
            li{
                display: inline-block;
                min-width: 5em;
                margin: 0 0.5em;
                
                a{
                    text-decoration: none;
                    display: block;
                    font-weight: 200;
                    font-size: 18px;
                    position: relativce;
                    color: white;
                    padding: .5em 0;

                    &:hover{
                         
                        font-weight: bold;   
                    }
                }
               
            }

        }
        
    }
`;

export const Image = styled.img`
    width: 372px;
    font-size: 29px;
    margin: auto;
    display: flex;
    text-align: center;
`;