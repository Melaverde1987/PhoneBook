import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
        font-size: 62.5%;

        &::-webkit-scrollbar {
            width: 6px;
            height: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.colors.gray800};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.primary600};
        }

        /* for Firefox */
        @-moz-document url-prefix() {
            scrollbar-width: thin;
            scrollbar-color: ${({ theme }) => theme.colors.primary600} ${({ theme }) => theme.colors.primary600};
        }
    }

    ::selection {
        background: ${({ theme }) => theme.colors.primary500};
        color: ${({ theme }) => theme.colors.white};
    }

    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 1.6rem;
        line-height: 1.4;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.white};
        margin: 0;
        overflow-x: hidden;
        width: 100%;
        height: auto;
    }

    #root {
        margin: 20px;
        background-color: ${({ theme }) => theme.colors.body};
    }

     main {
        width: 100%;
        max-width: 960px;
        padding-inline: 20px;
        margin-left: auto;
        margin-right: auto;
        min-height: 80vh;
        padding-block: ${({ theme }) => theme.spacing.md};

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            min-height: 87vh;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
    }

    h1, .h1 {
        font-size: 40px;
        text-align: center;
        background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary500}, ${({ theme }) => theme.colors.text});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: 48px;
        }
    }

    h2 {
        font-size: 22px;
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

    label {
        margin-bottom: 3px;
        margin-left: 3px;
        color: ${({ theme }) => theme.colors.primary500};
        font-weight: 600;
        position: relative;
        z-index: 2;
        font-size: 14px;
    }

    input {
        width: 100%;
        font-size: 16px;
        border: none;
        padding: 10px 16px;
        border-radius: 6px;
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.gray500};
        box-shadow:
            20px 20px 40px ${({ theme }) => theme.colors.gray600},
            -20px -20px 60px ${({ theme }) => theme.colors.white};

        transition: background-color 0.3s, box-shadow 0.3s;

        &:focus {
            outline: 1px solid ${({ theme }) => theme.colors.primary700};
            outline-offset: 2px;
            background: ${({ theme }) => theme.colors.gray600};
            box-shadow:
                inset 20px 20px 60px ${({ theme }) => theme.colors.gray700},
                inset -20px -20px 60px ${({ theme }) => theme.colors.white};
        }

        &:is(:autofill, :-webkit-autofill) {
            -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
            caret-color: ${({ theme }) => theme.colors.text};
            box-shadow: 20px 20px 40px ${({ theme }) => theme.colors.gray600},
                -20px -20px 60px ${({ theme }) => theme.colors.white},
                inset 0 0 0 1000px ${({ theme }) => theme.colors.gray500};
        }

        &:is(:autofill, :-webkit-autofill):focus {
            box-shadow: inset 20px 20px 60px ${({ theme }) => theme.colors.gray700},
            inset -20px -20px 60px ${({ theme }) => theme.colors.white},
            inset 0 0 0 1000px ${({ theme }) => theme.colors.gray600};
        }

        &::placeholder{
            color: ${({ theme }) => theme.colors.secondary};
            opacity: .7;
        }
    }

    input[type='search'] {
        padding-left: 42px;

        & + svg {
            position: absolute;
            top: 50%;
            left: 14px;
            transform: translateY(-50%);
            width: 22px;
            height: 22px;
            pointer-events: none;
            color: ${({ theme }) => theme.colors.secondary};
            opacity: .7;
        }
    }
`;
