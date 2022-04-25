import styled from 'styled-components'

export const homeContainer = styled.section`
display:flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
padding-left: 5rem;
`
export const homeTitle = styled.h1`
font-size: 3rem;
padding: 3rem 0rem;
font-weight: 900;
}
`
export const homeLink = styled.p`
font-size: 1rem;
font-weight: 900;
a {
    color: black;
    display:inline-block; 
    margin:0;text-transform:uppercase;
    &:after {
        display:block;
        content: '';
        border-bottom: solid 3px grey;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    &:hover {
        &:after { transform: scaleX(1) }
        color: grey;
    }
}
`
// export const containerHome = styled.div`
// `