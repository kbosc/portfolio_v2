import styled from 'styled-components'
import { FadeIn } from "../../../styles/theme"

export const navigationWrapper = styled.div`
animation: ${FadeIn} 1.5s;
position: relative;
.arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
}  
.arrow--left {
    left: 5px;      
} 
.arrow--right {
    left: auto;
    right: 5px;
}
.arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
}
`
export const numberSlide = styled.div`
// background-color: red;
@media (min-width: 768px) {
    height: 230px;
}
@media (min-width: 1024px) {
    height: 330px;
}
@media (min-width: 1440px) {
    height: 380px;
}
`
export const dots = styled.div`
display: flex;
padding: 10px 0;
justify-content: center;
.dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &.active {
        background: #000;
        }
}
`
export const dot = styled.div`
`
export const arrow = styled.div`
width: 30px;
height: 30px;
position: absolute;
top: 50%;
transform: translateY(-50%);
-webkit-transform: translateY(-50%);
fill: #fff;
cursor: pointer;
`
export const arrowLeft = styled.div`
left: 5px;
`
export const arrowRight = styled.div`
left: auto;
right: 5px;
`
export const arrowDisabled = styled.div`
fill: rgba(255, 255, 255, 0.5);
`


  