import styled from "styled-components";


export const Wrapper = styled.footer`
    background-color: var(--colorFooter);
    color: --var(white);
`;

export const Context = styled.div`
    padding-top: 60px;
    padding-bottom: 35px;
    
    h5{
        font-size: 14px;
        font-size: 19px;
        color: #fff;
        margin-bottom: 20px;
        font-family: cursive;
    }
    .talent{
        text-align: end;
        padding: 9px;
        border: 1px solid #3faba0;
        border-radius: 8px;
        height: 41px;
        color: var(--white);
    }
    .newsletter{
        font-size: 20px;
        color: var(--white);
    }
    .footerEmail{
        margin: 0px;
        padding: 5px;
        border: 1px solid #3faba0;
        border-radius: 8px;
        height: 41px;
    
    }
    .foote-email{
        text-decoration: none;
        width: 10em;
        color: #FFFFFF;
        background: #242736;
        height:copy 32px;
        border: none;
    }

    .white{
        width: 41px;
        padding: 3px;
        background: #3faba0;
        font-size: 34px;
        color: #fff;
        margin-top: 0px;
    }

    @media (max-width: 991px) {
        .disableds{
            display: none;
        }
    }

    @media (max-width: 767px) {
        .foote-email{
            width: 10rem;
        }
    }

    hr{
        height: 1px;
        margin: 15px 0 30px 0;
        color: #ededed;
    }

    ul{
        list-style: none;
        margin: 0 0 0 0;
        padding: 0;

        li{
            display: inline-block;
            margin-right: 10px;
            font-size: 16px;
            font-size: 1rem;
            margin-bottom: 10px;

            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }

    #copy{
        text-align: right;
        font-size: 13px;
        font-size: 0.8125rem;
        color: #999;

        .copy{
            color: white;
        }
    }

`;

export const TestP = styled.p`
    text-align: center;
    font-size: 10px;
    color: var(--white);
`;
