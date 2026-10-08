import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        line-height: 1.2;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.white};
        margin: 0;
    }

    #root {
        margin: 20px;
        background-color: ${({ theme }) => theme.colors.body};
    }

     main {
        width: 100%;
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
        min-height: 87vh;
        padding-block: ${({ theme }) => theme.spacing.md};
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
    }

    h1 {
        font-size: 48px;
        text-align: center;
        background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary500}, ${({ theme }) => theme.colors.text});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        margin-top: 0;
        margin-bottom: 0.5em;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: color ${({ theme }) => theme.transition.normal};
    }

    a:hover,
    a:focus-visible {
        color: ${({ theme }) => theme.colors.primary500};
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        font-size: 16px;
        transition: color ${({ theme }) => theme.transition.normal};
    }

    button:hover,
    button:focus-visible {
        color: ${({ theme }) => theme.colors.primary500};
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    hr {
        border-top: 1px solid ${({ theme }) => theme.colors.border};
    }

  

    input:focus,
    textarea:focus {
        outline: 1px solid ${({ theme }) => theme.colors.primary500};
    }

    label {
        margin-bottom: 5px;
        color: ${({ theme }) => theme.colors.primary500};
        font-weight: 600;
    }

    input {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.colors.black};
    }
    

    .card {
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    .wrapper {
        width: 100%;
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
    }

    .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
`;
