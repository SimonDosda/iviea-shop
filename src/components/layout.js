import React from "react";
import styled from "styled-components";
import "normalize.css";
import { GlobalStyles } from "../styles/global-styles";
import { Typography } from "../styles/typography";
import Footer from "./footer";
import Header from "./header";

const Page = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  isolation: isolate;
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;

  main {
    background-color: white;
    align-self: center;
    width: min(100%, 1180px);
    padding: 24px;
    margin-top: 180px;
  }
`;

export default function Layout({ children }) {
  return (
    <Page>
      <GlobalStyles />
      <Typography />
      <Header />
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </Page>
  );
}
