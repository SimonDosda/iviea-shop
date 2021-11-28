import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Article from "../components/article";

export default function WavepoolArticle() {
  const link = "https://wavepoolmag.com/art-study-ivie-akinwumis-surf-world/";
  const title =
    "Art Study: Ivie Akinwumi’s work celebrates global surf culture";
  const info = "June 3, 2021. Written by Bryan Dickerson";
  const quote = `Don’t get me started on the woman who rides waves. Can you imagine
            joyously mounting the very thing you and others are taught to fear.`;

  return (
    <Article link={link} title={title} info={info} quote={quote}>
      <StaticImage
        src="../assets/images/wavepool-article.jpg"
        alt="wavepool article picture"
        placeholder="blurred"
      />
      <StaticImage
        src="../assets/images/wavepool-logo.jpg"
        alt="wavepool logo"
        height={50}
        placeholder="blurred"
      />
    </Article>
  );
}
