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
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
  }
  .logo {
    margin: 0 20px;
    font-family: PTSerif, Roboto, serif;
    font-weight: bold;
    font-size: 2em;
    color: var(--primary-4);
  }
  .links {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    a {
      padding: 0 20px;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 450px) {
    .links {
      display: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="content">
        <div className="logo">
          <Link to="/">Ivie A.</Link>
        </div>
        <div className="links">
          <Link to="/wall-art">Wall Art</Link>
          <a href="https://www.etsy.com/shop/IvieA">Shop</a>
        </div>
      </div>
    </HeaderStyled>
  );
}
