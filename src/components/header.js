import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  position: absolute;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 1em;
  box-sizing: border-box;
  /* border-bottom: 2px solid var(--primary-4); */
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
    font-size: 0.8rem;
    background-color: rgba(255, 255, 255, 0.6);
    .links {
      margin-top: 0.8rem;
    }
  }
`;

const BannerStyles = styled.div`
  .banner {
    height: min(300px, calc(50vw));
    width: 100%;
    object-fit: cover;
  }
`;

export default function Header() {
  return (
    <>
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
      <BannerStyles>
        <StaticImage
          src="../assets/images/banner.png"
          alt="banner"
          placeholder="blurred"
          className="banner"
        />
      </BannerStyles>
    </>
  );
}
