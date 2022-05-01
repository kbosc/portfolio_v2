import styled from 'styled-components'

export const containerSlide = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 100%;
gap: 1rem;
`
export const containerDescription = styled.section`
font-weight: 900;
.alignLink {
  display: flex;
  align-items: flex-end;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-style: italic;
  font-weight: 900;
}
width: 50%;
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