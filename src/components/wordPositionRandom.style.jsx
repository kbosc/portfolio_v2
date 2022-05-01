import styled, { keyframes } from 'styled-components'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const randomlyWord = styled.main`
position: absolute;
cursor: pointer;
top: ${getRandomInt(100)}vh;
width: ${getRandomInt(100)}vw;
`