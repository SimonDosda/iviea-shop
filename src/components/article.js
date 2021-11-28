import React from "react";
import styled from "styled-components";
import { LinkButton } from "../styles/button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.reversed ? "row-reverse" : "row")};
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  flex: 1;
  .gatsby-image-wrapper {
    height: 100%;
  }
`;

const ArticleInfo = styled.div`
  flex: 1;

  .wrapper {
    padding: 20px;
    padding-bottom: 0;
  }

  .logo {
    max-width: min(100%, 300px);
    &:hover {
      --d: 0%;
      --p: 0%;
    }
  }

  blockquote {
    font-weight: 100;
    font-size: 1.2rem;
    max-width: 600px;
    line-height: 1.4;
    position: relative;
    margin: 0;
    padding: 0.5rem 1.5rem;
    & > p {
      text-indent: 1.5rem;
      text-align: justify;
    }
  }

  blockquote:before,
  blockquote:after {
    position: absolute;
    color: var(--primary-2);
    font-size: 8rem;
    width: 4rem;
    height: 4rem;
  }

  blockquote:before {
    content: "“";
    left: 0rem;
    top: -2rem;
  }

  blockquote:after {
    content: "”";
    right: -1.5rem;
    bottom: 1.5rem;
  }
`;

export default function Article({
  title,
  info,
  quote,
  link,
  reversed,
  children,
}) {
  console.log(children);
  return (
    <Wrapper reversed={reversed}>
      <Image>{children[0]}</Image>
      <ArticleInfo>
        <div className="wrapper">
          <a href={link} className="logo">
            {children[1]}
          </a>

          <h3>{title}</h3>
          <p>{info}</p>
          <blockquote cite={link}>
            <p>{quote}</p>
          </blockquote>
          <LinkButton>
            <a href={link}> Read the article</a>
          </LinkButton>
        </div>
      </ArticleInfo>
    </Wrapper>
  );
}
