import { createGlobalStyle } from 'styled-components';
import montserratRegularWoff from 'assets/fonts/montserrat-regular-webfont.woff';
import montserratRegularWoff2 from 'assets/fonts/montserrat-regular-webfont.woff2';
import montserratBoldWoff from 'assets/fonts/montserrat-bold-webfont.woff';
import montserratBoldWoff2 from 'assets/fonts/montserrat-bold-webfont.woff2';

const GlobalStyle = createGlobalStyle`
    :root{
        --color-bgcDark: ${(props) => props.theme.colorBgcDark};
        --color-bgcLight: ${(props) => props.theme.colorBgcLight};
        --color-darkBlue: ${(props) => props.theme.colorDarkBlue};
        --color-lightShadow: ${(props) => props.theme.colorLightShadow};
        --color-darkShadow: ${(props) => props.theme.colorDarkShadow};
        --color-contrast: ${(props) => props.theme.colorContrast};
        --color-line: ${(props) => props.theme.colorLine};
        --color-yellow: ${(props) => props.theme.colorYellow};
        --color-blue: ${(props) => props.theme.colorBlue};
        --color-red: ${(props) => props.theme.colorRed};
        --color-green: ${(props) => props.theme.colorGreen};
    }

    @font-face {
        font-family: "Monts";
        font-style: normal;
        font-weight: 400;
        src: 
        url(${montserratRegularWoff2}) format('woff2'),
        url(${montserratRegularWoff}) format('woff');
        font-display: swap;
    }
    @font-face {
        font-family: "Monts";
        font-weight: 700;
        src: 
        url(${montserratBoldWoff2}) format('woff2'),
        url(${montserratBoldWoff}) format('woff');
        font-display: swap;
    }
   
    html {
        font-size: 10px;
        height: 100%;
        height: auto;
    }

    body {
        background: linear-gradient(90deg, var(--color-bgcLight) 0%, var(--color-bgcDark) 100%);
        font-family: "Monts", Verdana, sans-serif;
        font-size: 1.6rem;
        color: var(--color-darkBlue);
        line-height:1.5;
    }

    #root {
        padding: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height:100%;
    }
`;

export default GlobalStyle;
