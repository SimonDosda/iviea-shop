import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
  background-color: var(--light);
  padding: 1em;
  text-align: center;

  .title {
    font-family: PTSerif;
    font-weight: bold;
    font-size: 2em;
    color: white;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <span>
      <Link to="/" className="title">
        {siteTitle}
      </Link>
    </span>
  </HeaderStyled>
)

export default Header
