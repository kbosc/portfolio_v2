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

export const ThemeDefault = {
    colors: {
        // text: "#2c3e50",
        // un: '#FCD1BA',
        // deux: '#D5A19D',
        // trois: "#9F8AA7",
        // quatre: "#34262E",
        // cinq: "#A05063",
        // six: "#A07692",
        // sept: "#F4EBF0",
        // huit: "#9A828B",
        // unCheat: "#FFEADF",
        // troisCheat: "#D3C4D7",
        // roseCheat: "#FBCEF2",
        // greyCard: "#9C9C9C",
        // kakiCard: "#667761",
        // vertCard: "#DEF2C8",
        // backgroundColor: "rgba(246, 241, 209)",
        // contour
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