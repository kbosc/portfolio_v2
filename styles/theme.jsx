import styled, { keyframes } from 'styled-components'

export const FadeIn = keyframes`
    from {
        opacity: 0;
        // transform: translateY(100px);
    }
    to {
        opacity: 1;
        // transform: translateY(0px)
    }
`
export const StyledLink = styled.a`
    font-weight: 900;
    @media (min-width: 768px) {
        font-size: 0.8rem;   
    }
    @media (min-width: 1024px) {
        font-size: 0.8rem;   
    }
    @media (min-width: 1440px) {
        font-size: 1rem;
    }
    color: black;
    display:inline-block; 
    margin: 0rem 0.5rem;
    text-transform:uppercase;
    &:after {
        display:block;
        content: '';  
        // border-bottom: solid 3px ${props => props.theme.colors.sobreCardBlack};  
        border-bottom: solid 3px black;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    &:hover {
        &:after { transform: scaleX(1) }
    }
`
export const TitleH3 = styled.h3`
    font-weight: 400;
    font-size: 1.5rem;
    font-family: 'Fredericka the Great', cursive;
    color: ${props => props.theme.colors.colorShadeB};
`
export const TitleH2 = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    font-weight: 400;
    color: ${props => props.theme.colors.colorShadeB};
`

export const ThemeDefault = {
    colors: {
        colorShadeA: "#367471",
        // fond bouton
        colorShadeB: "#047b64",
        // mileu bouton
        colorShadeC: "#05bfc6",
        // hoover haut du bouton
        colorShadeD: "#76d9dd",
        // colorShadeD: "white",
        //haut du bouton
        colorShadeE: "#aed6d5",
    },
}