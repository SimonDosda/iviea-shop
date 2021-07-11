import React from "react";

import featureImage from "../assets/images/wavepool-article.jpeg";
import logoImage from "../assets/images/wavepool-logo.png";
import { ArticleStyles } from "../styles/article";
import { LinkButton } from "../styles/button";

export default function WavepoolArticle() {
  const link = "https://wavepoolmag.com/art-study-ivie-akinwumis-surf-world/";
  return (
    <ArticleStyles>
      <img src={featureImage} alt="wavepool mag" />
      <div className="body">
        <a href={link}>
          <img src={logoImage} alt="wavepool mag" />
        </a>

        <h3>Art Study: Ivie Akinwumi’s work celebrates global surf culture</h3>
        <p>June 3, 2021. Written by Bryan Dickerson</p>
        <blockquote cite={link}>
          <p>
            There is much to be said about a woman who is able to silence these
            voices and embrace the ocean and claim it as hers. She is free. And
            don’t get me started on the woman who rides waves. Can you imagine
            joyously mounting the very thing you and others are taught to fear.
          </p>
        </blockquote>
        <LinkButton>
          <a href={link}> Read the article</a>
        </LinkButton>
      </div>
    </ArticleStyles>
  );
}
