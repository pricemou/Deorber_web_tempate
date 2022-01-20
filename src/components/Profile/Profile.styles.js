import styled from "styled-components";


export const Context = styled.div`
    background: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 26rem; 
`;

export const Wrapper = styled.div`
    background: url(${({ image }) => image});
`;

export const Main = styled.div`
    .paragrapheCommantaire{
        background: ${(props) => props.theme.sectionTandance};
        padding: 9px;
        border: 1px solid ${(props) => props.theme.fontwhite};
        border-radius: 21px;
        font-size: 12px;
    }

    .paragrapheCommantaire .Commente{
        font-size: 12px;
        font-weight: 500;
        color: ${(props) => props.theme.fontColorCommenteH};
    }

`;