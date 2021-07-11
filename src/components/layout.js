import React from "react";
import styled from "styled-components";
import "normalize.css";
import { GlobalStyles } from "../styles/global-styles";
import { Typography } from "../styles/typography";
import Footer from "./footer";
import Header from "./header";

const Page = styled.div`
  min-height: 100vh;
  width: 100hw;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    align-self: center;
    box-sizing: border-box;
    width: min(100%, 1180px);
    padding: 1em;
  }
`;

export default function Layout({ children }) {
  return (
    <Page>
      <GlobalStyles />
      <Typography />
      <Header />
      <main>{children} </main>
      <Footer />
    </Page>
  );
}
