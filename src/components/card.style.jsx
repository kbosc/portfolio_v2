import styled from 'styled-components'

export const centerCard = styled.main`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`
export const cardItem = styled.div`
position: relative;
border: 10px solid white;
border-radius: 30px;
webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
-moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
display: flex;
@media (min-width: 768px) {
    // faire swipe l'utilisateur
    width: 80%;
    height: 50%;
}
`
export const tabsCard = styled.nav`
background-color: grey;
border-radius: 20px;
max-width: 100%;
max-height: 100%;
padding: 2%;
`
export const contentCard = styled.section`
`
