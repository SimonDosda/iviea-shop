import React from "react";
import styled from "styled-components";
import Instagram from "../assets/logos/instagram.svg";
import Shop from "../assets/logos/shop.svg";

const FooterStyles = styled.footer`
  background-color: var(--primary-4);
  padding: 1em;
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
  color: white;

  .icon {
    height: 24px;
    width: 24px;
    stroke: white;
    padding: 6px;
  }
  .fill-white {
    fill: white;
  }
  ul {
    flex: 1;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
      display: flex;
      align-items: center;
      color: white;
      padding-right: 20px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <ul>
        <li>
          <a href="https://www.etsy.com/shop/IvieA">
            <Shop className="icon fill-white" />
            Shop
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ivieakinwumi">
            <Instagram className="icon" />
            Instagram
          </a>
        </li>
      </ul>
      <span className="copyright">© {new Date().getFullYear()}, Ivie A.</span>
    </FooterStyles>
  );
}
