import { createGlobalStyle } from "styled-components";

import Fira_Sans_regular from "../assets/fonts/Fira_Sans/FiraSans-Regular.ttf";
import Fira_Sans_bold from "../assets/fonts/Fira_Sans/FiraSans-Bold.ttf";
import Fira_Sans_italic from "../assets/fonts/Fira_Sans/FiraSans-Italic.ttf";
import Fira_Sans_bold_italic from "../assets/fonts/Fira_Sans/FiraSans-BoldItalic.ttf";

import PT_Serif_regular from "../assets/fonts/PT_Serif/PTSerif-Regular.ttf";
import PT_Serif_bold from "../assets/fonts/PT_Serif/PTSerif-Bold.ttf";
import PT_Serif_italic from "../assets/fonts/PT_Serif/PTSerif-Italic.ttf";
import PT_Serif_bold_italic from "../assets/fonts/PT_Serif/PTSerif-BoldItalic.ttf";

import Source_Sans_Pro_regular from "../assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf";
import Source_Sans_Pro_light from "../assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf";
import Source_Sans_Pro_bold from "../assets/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf";
import Source_Sans_Pro_semibold from "../assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf";
import Source_Sans_Pro_italic from "../assets/fonts/Source_Sans_Pro/SourceSansPro-Italic.ttf";

export const Typography = createGlobalStyle`
  // Fira Sans
  @font-face {
    font-family: FiraSans;
    src: url(${Fira_Sans_regular});
  }
  @font-face {
    font-family: FiraSans;
    src: url(${Fira_Sans_bold});
    font-weight: bold;
  }
  @font-face {
    font-family: FiraSans;
    src: url(${Fira_Sans_italic});
    font-style: italic;
  }
  @font-face {
    font-family: FiraSans;
    src: url(${Fira_Sans_bold_italic});
    font-weight: bold;
    font-style: italic;
  }
  
  // PT Serif
  @font-face {
    font-family: PTSerif;
    src: url(${PT_Serif_regular});
  }
  @font-face {
    font-family: PTSerif;
    src: url(${PT_Serif_bold});
    font-weight: bold;
  }
  @font-face {
    font-family: PTSerif;
    src: url(${PT_Serif_italic});
    font-style: italic;
  }
  @font-face {
    font-family: PTSerif;
    src: url(${PT_Serif_bold_italic});
    font-weight: bold;
    font-style: italic;
  } 
  
  // Source Sans Pro
  @font-face {
    font-family: SourceSansPro;
    src: url(${Source_Sans_Pro_regular});
  }
  @font-face {
    font-family: SourceSansPro;
    src: url(${Source_Sans_Pro_light});
    font-weight: 300;
  }
  @font-face {
    font-family: SourceSansPro;
    src: url(${Source_Sans_Pro_semibold});
    font-weight: 600;
  } 
  @font-face {
    font-family: SourceSansPro;
    src: url(${Source_Sans_Pro_bold});
    font-weight: bold;
  } 
  @font-face {
    font-family: SourceSansPro;
    src: url(${Source_Sans_Pro_italic});
    font-style: italic;
  }
  
  html {
    font-family: SourceSansPro, Roboto, sans-serif;
    color: var(--black);
  }
  
  h1, .title {
    font-family: SourceSansPro, Roboto, sans-serif;
    font-weight: 300;
    font-size: 1.5em;
    text-transform: capitalize;
  }
  
  a {
    font-family: PTSerif, Roboto, serif;
    font-weight: 600;
  }
`;
