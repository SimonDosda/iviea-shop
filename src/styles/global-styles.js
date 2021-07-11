import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-1: #F8F2ED;
    --primary-2: #F3E0CE;
    --primary-3: #EC9F68;
    --primary-4: #C27A40;
    --text: #211104;
    --header: white;
  }
  
  a {
    color: var(--primary-4);
    text-decoration: none;
    &:hover {
      color: var(--primary-3);
    }
  }
  
  img {
      max-width: 100%;
  }
  `;
