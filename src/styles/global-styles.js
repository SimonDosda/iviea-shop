import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --extra-light: #FFF7EF;
    --light: #F5B370;
    --medium: #C27A40;
    --dark: #754A27;
    --black: #211104;
  }
  
  a {
    color: var(--dark);
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: var(--medium);
    }
  }
 
`
