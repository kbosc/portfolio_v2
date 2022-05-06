import styled from 'styled-components'

export const tabHead = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: nowrap;
justify-content: flex-end;
margin-bottom: 3rem;
@media (min-width: 768px) {
    margin-bottom: 1.5rem;
}
`
export const tabContainer = styled.div`
height: 100%;
border-radius: 20px;
padding: 1rem;
`
export const tabBody = styled.section`
display: block;
overflow: auto;
`
export const tab = styled("div")`
* {
    color: black;
}
position: relative;
display: inline-block;
outline: none;
border: 0;
vertical-align: middle;
text-decoration: none;
font-size: 0.5rem;
color: ${props => props.theme.colors.colorShadeA};
font-weight: 700;
text-transform: uppercase;
font-family: inherit;
cursor: pointer;
&.big-button {
    padding: 1em 2em;
    border: 2px solid ${props => props.theme.colors.colorShadeA};
    border-radius: 1em;
    background: ${props => props.theme.colors.colorShadeE};
    transform-style: preserve-3d;
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
}
&.big-button::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.colorShadeC};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.colorShadeB}, 0 0.75em 0 0 ${props => props.theme.colors.colorShadeA};
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
}
&.big-button:hover {
    background: ${props => props.theme.colors.colorShadeD};
    transform: translate(0, 0.375em);
}
&.big-button:active {
    transform: translate(0em, 0.75em);
}
&.big-button:active::before {
    transform: translate3d(0, 0, -1em);
    box-shadow: 0 0 0 2px ${props => props.theme.colors.colorShadeB}, 0 0.25em 0 0 ${props => props.theme.colors.colorShadeB};
}
`

