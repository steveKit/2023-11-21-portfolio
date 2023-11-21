import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary-color: #F5F5F5;
        --secondary-color: #1F1F1F;
        --primary-accent-color: #D2D2CD;
        --secondary-accent-color: #5c707b;
        --tertiary-accent-color: #474850;
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
        background-color: var(--secondary-color);
        line-height: 1.2;
    }
    h1 {
        font-family: 'Epilogue', sans-serif;
        color: var(--primary-color);
        font-size: 2rem;
        font-weight: 700;
        padding-bottom: 0.5rem;
    }
    p {
        font-family: 'Epilogue', sans-serif;
        font-size: 1.3rem;
        font-weight: 200;
        color: var(--primary-accent-color);
        line-height: 1.75rem;
    }
    a {
		text-decoration: none;
		color: var(--accent-color);
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
