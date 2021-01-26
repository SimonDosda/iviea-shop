import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FFF7EF;
    --dark-background: #F5B370;
    --primary: #C27A40;
    --accent: #754A27;
    --text: #211104;
    --header: white;
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
