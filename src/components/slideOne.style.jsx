import styled from 'styled-components'

export const slideTitle = styled.h3`
font-weight: 400;
font-size: 1.5rem;
font-family: 'Fredericka the Great', cursive;
color: ${props => props.theme.colors.colorShadeB};;
`
export const listSlide = styled.li`
list-style-type: disc;
pointer-events: none;
`
export const sectionDescription = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const containerSlide = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 100%;
gap: 1rem;
.alignLink {
  position: fixed;
  @media (min-width: 768px) {
    bottom: 0rem;
    right: 0rem;
  }
  @media (min-width: 1024px) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
`
export const containerDescription = styled.section`
margin-left: 1.5rem;
font-weight: 900;
width: 50%;
display: flex;
flex-direction: column;
gap: 1.5rem;
`
export const containerImage = styled.aside`
// width: 50%;
display: block
background-color: black;
// border-radius: 30px;
// .imageCarousel {
//   width: 50%;
//   height: 50%;
// }
`