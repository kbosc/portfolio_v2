import React from "react"
import * as Style from "./tabs.style.jsx"
import Link from "next/link"
import { withRouter } from "next/router"
import Home from "./tabpanel/Home"
import Work from "./tabpanel/Work"
import About from "./tabpanel/About"

export function Tabs({ router }) {
    const {query: { tab }} = router
    const isTabOne = tab === "1" || tab == null
    const isTabTwo = tab === "2"
    const isTabTree = tab === "3"

  return (
    <Style.tabContainer>
        <Style.tabHead>
            <Link href={{ pathname: "/", query: { tab: "1" } }} passHref>
                <Style.tab className="big-button">
                    <a>Home</a>
                </Style.tab>
            </Link>
            <Link href={{ pathname: "/", query: { tab: "2" } }} passHref>
                <Style.tab className="big-button">
                    <a>Work</a>
                </Style.tab>
            </Link>
            <Link href={{ pathname: "/", query: { tab: "3" } }} passHref>
                <Style.tab className="big-button">
                    <a>About</a>
                </Style.tab>
            </Link>
            <Link href={`/sandBox`} passHref>
                <Style.tab className="big-button">
                    <a>Sandbox</a>
                </Style.tab>
            </Link>
        </Style.tabHead>
        <Style.tabBody>
            {isTabOne && <Home/>}
            {isTabTwo && <Work/>}
            {isTabTree && <About/>}
        </Style.tabBody>
    </Style.tabContainer>
  )
}

export default withRouter(Tabs)
