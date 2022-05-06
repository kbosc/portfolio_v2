import styled, { keyframes }  from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
}
50% {
    transform: rotate(-90deg)
}
100% {
    transform: rotate(-90deg)
}
`

export const smartphoneCard = styled.div`
margin: 2rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`
export const phone = styled.div`
height: 50px;
width: 100px;
border: 3px solid white;
border-radius: 10px;
animation: ${rotate} 1.5s ease-in-out infinite alternate;
`
export const messageRotate = styled.p`
text-align: center;
line-height: 2rem;
`
