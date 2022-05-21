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
    }

    @font-face {
        font-family: "Montserrat";
        font-style: regular;
        font-weight: 400;
        src:
        url(${montserratRegularWoff2}) format('woff2'),
        url(${montserratRegularWoff}) format('woff');
    }
    @font-face {
        font-family: "Montserrat";
        font-weight: 700;
        src:
        url(${montserratBoldWoff2}) format('woff2'),
        url(${montserratBoldWoff}) format('woff');
    }
   
    html {
        font-size: 10px;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(90deg, rgb(var(--color-lightShadow)) 0%, rgb(var(--color-darkShadow)) 100%);
        font-family: "Montserrat", Verdana, sans-serif;
        font-size: 1.6rem;
        font-size: 40px;
        color: rgb(var(--color-darkBlue));
        line-height:1.5;
    }
`;

export default GlobalStyle;
