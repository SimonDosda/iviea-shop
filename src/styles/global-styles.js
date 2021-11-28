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

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  a {
    color: var(--primary-4);
    text-decoration: none;
    line-height: normal;
    background: 
      linear-gradient(currentColor 0 0) 
      var(--p, 0) 100% /var(--d, 0) 3px 
      no-repeat;      
    transition: 0.3s, background-position 0s 0.3s;
    
    &:hover {
      --d: 100%;
      --p: 100%;
    }
  }
  
  img {
      max-width: 100%;
  }
  `;
