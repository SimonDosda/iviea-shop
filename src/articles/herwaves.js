import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Article from "../components/article";

export default function HerWavesArticle() {
  const link = "https://www.herwaves.com/blogs/her-stories/meet-ivie-a";
  const title = "Meet Nigerian Artist Ivie Akinwumi";
  const info = "August 29, 2021";
  const quote =
    "At present, I’m deeply inspired by women, particularly of African descent, who embrace and nurture their connection with water.";
  return (
    <Article
      link={link}
      title={title}
      info={info}
      quote={quote}
      reversed={true}
    >
      <StaticImage
        src="../assets/images/herwaves-article.jpg"
        alt="herwaves article picture"
        placeholder="blurred"
      />
      <StaticImage
        src="../assets/images/herwaves-logo.webp"
        alt="herwaves logo"
        height={50}
        placeholder="blurred"
      />
    </Article>
  );
}
