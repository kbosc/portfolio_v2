import styled from 'styled-components'
import { FadeIn } from "../../../styles/theme"

export const containerAbout = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;
@media (min-width: 1440px) {
    margin-top: 3rem;
}
animation: ${FadeIn} 1.5s;
`
export const containerDescription = styled.section`
@media (min-width: 768px) {
    h3 {
        font-size: 1.5rem;
    }
    p {
        font-weight: 900;
        font-size: 0.7rem;   
    }
}
@media (min-width: 1024px) {
    h3 {
        font-size: 2rem;
    }
    p {
        font-weight: 900;
        font-size: 0.9rem;   
    }
}
@media (min-width: 1440px) {
    h3 {
        font-size: 2rem;
    }
    p {
        font-weight: 900;
        // font-size: 2rem;   
    }
}
h3 {
    font-family: 'Fredericka the Great', cursive;
    font-weight: 400;
}
width: 50%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
gap: 1rem;
a {
    // font-weight: 900;
    font-style: italic;
}
`
export const containerImage = styled.div`
overflow: hidden;
border-radius: 30px;
width: 50%;
`