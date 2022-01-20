import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #242736;
`;

export const Context = styled.div`
    
    ul{
        list-style-type: none;
        margin: 0px;
        padding: 11px;
        font-size: 18px;
        /* text-align: center; */
        font-weight: inherit;
        height: auto;
        
        li{
            display: inline-block;
            min-width: 5em;
            margin: 0 0.5em;
            color: white;

            a{
                text-decoration: none;
                display: block;
                font-family: Arial;
                position: relative;
                padding: .5em 0;
            }

            &:hover {
                color: #3faba0;
                text-decoration: underline;
                text-decoration-color: #3faba0;
                font-weight: 700;
            }
            strong{
                font-size: 29px;
                font-weight: 300;
            }
        }

        
    }
`;