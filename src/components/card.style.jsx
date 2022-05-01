import styled from 'styled-components'
import { FadeIn } from "../../styles/theme"


export const bgWrap = styled.div`
position: absolute;
height: 100%;
width: 100%;
overflow: hidden;
border-radius: 20px;
z-index: -1;
`

export const cardItem = styled.div`
// transform-style: preserve-3d;
// transition: .5s linear .1s;
// backface-visibility: hidden;
/////////////////
position: relative;
border: 10px solid white;
border-radius: 30px;
webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
-moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
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

export const tabsCard = styled.nav`
border-radius: 20px;
max-width: 100%;
max-height: 100%;
padding: 2%;
`