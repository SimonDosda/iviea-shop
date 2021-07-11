import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-bottom: 2px solid var(--primary-4);
  .content {
    width: min(100%, 1180px);
    display: flex;
    align-items: flex-end;
  }
  .title {
    font-family: PTSerif, Roboto, serif;
    font-weight: bold;
    font-size: 2em;
    color: var(--primary-4);
  }
  .spacer {
    flex: 1;
  }
  a {
    padding: 0 20px;
    font-size: 1.2rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="content">
        <Link to="/" className="title">
          Ivie A.
        </Link>
        <span className="spacer" />
        <Link to="/wall-art">Wall Art</Link>
        <a href="https://www.etsy.com/shop/IvieA">Shop</a>
      </div>
    </HeaderStyled>
  );
}
