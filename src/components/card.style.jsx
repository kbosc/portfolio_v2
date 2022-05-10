import styled from 'styled-components'
import { FadeIn } from "../../styles/theme"

export const cardItem = styled.div`
position: relative;
border: 10px solid white;
border-radius: 30px;
box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
@media (min-width: 768px) {
    width: 650px;
    height: 350px;
}
@media (min-width: 1024px) {
    width: 750px;
    height: 450px;
}
@media (min-width: 1440px) {
    width: 850px;
    height: 500px;
}
animation: ${FadeIn} 1.5s;
`
export const bgWrap = styled.div`
position: absolute;
height: 100%;
width: 100%;
overflow: hidden;
border-radius: 20px;
z-index: -1;
`