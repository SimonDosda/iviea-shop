import React from "react"
import styled from "styled-components"

const FooterStyled = styled.footer`
  background-color: var(--light);
  padding: 1em;
  text-align: right;

  .copyright {
    color: white;
  }
`

const Footer = ({ siteTitle }) => (
  <FooterStyled>
    <span className="copyright">© {new Date().getFullYear()}, Ivie A.</span>
  </FooterStyled>
)

export default Footer
