import styled from "styled-components";

export const LinkButton = styled.div`
  display: flex;
  a {
    display: block;
    flex: 1;
    text-align: center;
    fill: var(--primary-4);
    color: var(--primary-4);
    text-transform: uppercase;
    padding: 1em;

    background: linear-gradient(currentColor 0 0) 100% 0,
      linear-gradient(currentColor 0 0) 0 0,
      linear-gradient(currentColor 0 0) 0 100%,
      linear-gradient(currentColor 0 0) 100% 100%;
    background-size: var(--d, 0) 3px, 3px var(--d, 0);
    background-repeat: no-repeat;
    transition: 0.5s;

    &:hover {
      color: var(--primary-4);
      --d: 100%;
    }
  }
`;
