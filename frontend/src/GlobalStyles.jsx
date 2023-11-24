import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --light-primary: #F5F5F5;
        --dark-primary: #1F1F1F;
        --light-secondary: #D2D2CD;
        --dark-secondary: #474850;
        --accent: #5c707b;
        --light-accent: #e6e6e6;
        --light-shadow: #979793;
        --dark-shadow: #383941;
        /* --heading-font-family: 'Poppins', sans-serif;
        --body-font-family: 'Urbanist', sans-serif; */
        cursor: default;   
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
	    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        font-family: 'Epilogue', sans-serif;
        background-color: var(--dark-primary);
        line-height: 1.2;
    }
    h1 {
        color: var(--light-primary);
        font-size: 2rem;
        font-weight: 700;
        padding-bottom: 0.5rem;
    }
    h2 {
        color: var(--accent);
        font-weight: 100;
        font-size: 1rem;
        border-bottom: solid 1px ;
    }
    p {
        font-size: 1.3rem;
        font-weight: 200;
        color: var(--light-secondary);
        line-height: 1.75rem;
    }
    a {
		text-decoration: none;
		color: var(--light-secondary);
        -webkit-tap-highlight-color: transparent;
	}
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
        background: none;
        border: none;
    }
`;
