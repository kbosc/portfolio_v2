import styled, { keyframes }  from 'styled-components'

const move = keyframes`
to {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
`

export const loader = styled.div`
position: relative;
width: 150px;
height: 150px;
border-radius: 50%;
background: linear-gradient(45deg, transparent 40%, skyblue);
animation: ${move} 0.8s linear infinite;
&::before {
    position: absolute;
    content: "";
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: #000;
    border-radius: 50%;
    z-index: 2;
}
&::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent 40%, skyblue);
    filter: blur(20px);
}
`

