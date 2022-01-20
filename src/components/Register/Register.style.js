import styled from "styled-components";

export const Main = styled.main`
    position: relative;
    z-index: 1;
`;

export const Wrapper = styled.div`
    background: 
      
      url(${({ image }) => image}) no-repeat, #3e3f66;
    /* background-size: 100%, cover;
    height: 600px;
    position: relative; */

    display: block;
    
    
`;

export const Context = styled.div`
    padding-top: 40px;
    padding-bottom: 95px;
    
    .deoberPosition{
        padding: 2px;
        margin: auto;
        margin-top: 40%;

        .logoDeobers{
            width: 114%;
            font-size: 29px;
            margin: auto;
            display: flex;
            text-align: center;
        }
    }
    .contacTail{
        width: 395px;
        background-color: ${(props) => props.theme.body};
        padding: 19px;
        
        .seConnecter{
            line-height: 1.4;
            letter-spacing: 0;
            margin-bottom: 20px;
            font-size: 31px;
            color: ${(props) => props.theme.fontColor};
            font-weight: 600;
            text-align: center;
        }

        .seConnecter-text{
            text-align: center;
            margin: auto;
            color: #a5a3a3;
            width: 59%;
            font-family: ui-sans-serif;
            font-size: 13px;
        }

        .btn-actions-fecebook {
            display: inline-block;
            height: 42px;
            width: 100%;
            padding: 0 30px;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            line-height: 40px;
            letter-spacing: 2px;
            margin: 20px 0;
            text-decoration: none !important;
            white-space: nowrap;
            cursor: pointer;
            background-color: transparent;
            background-color: var(--bleuFacebook);
            color: var(--white);
            border: 1px solid ${(props) => props.theme.body};
            box-sizing: border-box;
            transition: 0.2s;

            .appleIcon {
                font-size: 17px;
                margin-right: 9%;
            }
        }
        .btn-actions-apple {
            display: inline-block;
            height: 42px;
            width: 100%;
            padding: 0 30px;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            line-height: 40px;
            letter-spacing: 2px;
            margin: 20px 0;
            text-decoration: none !important;
            white-space: nowrap;
            cursor: pointer;
            background-color: transparent;
            background-color: var(--medGrey);
            color: var(--white);
            border: 1px solid  var(--medGrey);
            box-sizing: border-box;
            transition: 0.2s;

            .appleIcon {
                font-size: 17px;
                margin-right: 9%;
            }
        }

        .labeText {
            color: #a5a3a3;
            font-size: 17px;
            padding: 9px;
        }

        .form-control{
            font-size: 14px;
            font-weight: 400;
            color: ${(props) => props.theme.fontColor};;
            /* border: 0; */
            background-color: ${(props) => props.theme.body};
            border-radius: 0;
            /* border: 1px solid #b4becb; */
            border: solid ${(props) => props.theme.registerBottomSeConnexter};;
			border-width: 0px 0px 1px 0px;
        }

        .btn-valide {
            display: inline-block;
            height: 42px;
            width: 100%;
            padding: 0 30px;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            line-height: 40px;
            letter-spacing: 2px;
            margin: 20px 0;
            /* text-transform: uppercase; */
            text-decoration: none !important;
            white-space: nowrap;
            cursor: pointer;
            background-color: transparent;
            background-color: var(--colorFooter);
            color: var(--white);
            border: 1px solid ${(props) => props.theme.registerBottomSeConnexter};
            box-sizing: border-box;
            transition: 0.2s;
        }

        .connecter {
            color: #a5a3a3;
            font-size: 10px;
            text-align: center;
            margin-top: 4%;

            strong {
                font-weight: bolder;
                color:${(props) => props.theme.fontColor};
            }
        }
    }

`;

export const Image = styled.img`
`;

