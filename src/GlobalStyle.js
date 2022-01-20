import styled, { createGlobalStyle } from "styled-components";

export const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


export const GlobalStyles = createGlobalStyle`

    :root {
        --maxWidth: 1280px;
        --white : #fff;
        --lightGrey: #b4becb;
        --darkGrey: #2f2d2d;
        --medGrey: #1c1c1c;
        --bleuFacebook: #5b6bfb;
        --colorFooter: #242736;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

	body {
		background-color: ${(props) => props.theme.body};
	}

`;