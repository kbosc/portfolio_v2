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
    fontSize: {
        title: "18px",
        paragraph: "12px",
    },
}


// import styled from 'styled-components'
// export const Button = styled.button`
//   border-color: ${props => props.theme.colors.secondary};
//   background-color: ${props => props.theme.colors.secondary};
//   color: white;
//   font-weight: bold;
//   padding: 10px;
//   display: inline-block;
//   cursor: default;
//   border-width: 2px;
//   border-style: outset;
//   color: -internal-light-dark(black, white);
//   background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
//   border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
//   &:active{
//     border-style: inset;
//   }
// `