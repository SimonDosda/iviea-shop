import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Cart from "./cart"

const HeaderStyled = styled.header`
  display: flex;
  background-color: var(--dark-background);
  padding: 1em;

  .title {
    font-family: PTSerif, Roboto, serif;
    font-weight: bold;
    font-size: 2em;
    color: var(--header);
  }

  .spacer {
    flex: 1;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Link to="/" className="title">
      {siteTitle}
    </Link>
    <span className="spacer" />
    <Cart />
  </HeaderStyled>
)

export default Header
