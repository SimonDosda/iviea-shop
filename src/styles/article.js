import styled from "styled-components";

export const ArticleStyles = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    flex: 1;
    max-width: min(100%, 400px);
    object-fit: cover;
  }

  .body {
    flex: 1;
    padding: 20px;
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
