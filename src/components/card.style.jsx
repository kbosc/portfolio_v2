import styled from 'styled-components'

export const centerCard = styled.main`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
position: relative;
`
export const bgWrap = styled.div`
position: absolute;
height: 100%;
width: 100%;
overflow: hidden;
border-radius: 20px;
z-index: -1;
`
export const smartphoneCard = styled.div`
margin: 2rem;
`
export const cardItem = styled.div`
position: relative;
// border: 10px solid ${props => props.theme.colors.sobreCardBlack};
border: 10px solid white;
border-radius: 30px;
webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
-moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
// permet de contenir le carousel, couplé à tabcontainer dans tabs.style
// display: flex;
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
`
export const tabsCard = styled.nav`
border-radius: 20px;
max-width: 100%;
max-height: 100%;
padding: 2%;
`
export const contentCard = styled.section`
`
