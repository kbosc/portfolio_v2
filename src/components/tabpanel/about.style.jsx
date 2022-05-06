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
a {
    margin-top: 1rem;
}
@media (min-width: 768px) {
    h2 {
        font-size: 1.5rem;
    }
    p {
        font-weight: 900;
        font-size: 0.7rem;
        margin-bottom: 0.2rem;
    }
}
@media (min-width: 1024px) {
    h2 {
        font-size: 2rem;
        margin-bottom: 0.4rem;
    }
    p {
        font-weight: 900;
        font-size: 0.9rem;   
    }
}
@media (min-width: 1440px) {
    h2 {
        font-size: 2rem;
    }
    p {
        font-weight: 900;
    }
}
width: 50%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
gap: 1rem;
a {
    font-style: italic;
}
`
export const containerImage = styled.div`
overflow: hidden;
border-radius: 30px;
width: 50%;
`