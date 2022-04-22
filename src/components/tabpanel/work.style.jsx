import styled from 'styled-components'
// version simple carousel ci dessous
// export const containerSlide = styled.div`
// margin: 1rem 0;
// width: 100%;
// height: 90%;
// border-radius: 30px;
// `
// export const numberSlide1 = styled.div`
// background-color: red;
// `
// export const numberSlide2 = styled.div`
// background-color: green;
// `
// export const numberSlide3 = styled.div`
// background-color: black;
// `
export const navigationWrapper = styled.div`
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
export const numberSlide1 = styled.div`
// background-color: red;
`
export const numberSlide2 = styled.div`
background-color: green;
`
export const numberSlide3 = styled.div`
background-color: black;
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


  