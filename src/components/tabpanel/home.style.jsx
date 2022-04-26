import styled from 'styled-components'

export const homeContainer = styled.section`
display:flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
padding-left: 5rem;
`
export const homeTitle = styled.h1`
font-weight: 400;
font-family: 'Fredericka the Great', cursive;
@media (min-width: 768px) {
    font-size: 2.5rem;
    padding: 3rem 0rem;   
    margin-left: 2.5rem;
}
@media (min-width: 1024px) {
    font-size: 3rem;
    padding: 3.5rem 0rem;   
    margin-left: 3rem;
}
@media (min-width: 1440px) {
    font-size: 3rem;
    padding: 5rem 0rem;
    margin-left: 4rem;
}
}
`
export const homeLink = styled.p`
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
a {
    color: black;
    display:inline-block; 
    margin: 0rem 0.5rem;
    text-transform:uppercase;
    &:after {
        display:block;
        content: '';
        // border-bottom: solid 3px ${props => props.theme.colors.colorShadeA};  
        border-bottom: solid 3px ${props => props.theme.colors.sobreCardBlack};  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    &:hover {
        &:after { transform: scaleX(1) }
    }
}
`