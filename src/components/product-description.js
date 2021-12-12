import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export default function ProductDescription() {
  return (
    <Wrapper>
      <ImageWrapper>
        <StaticImage
          src="../assets/images/wall-art.jpg"
          alt="wall art"
          placeholder="blurred"
        />
      </ImageWrapper>
      <TextWrapper>
        <p>
          These illustrations are hand-drawn and digitally edited by me in order
          to create unique, textured images.
        </p>

        <p>
          Every poster is printed on quality, durable matte paper and will add
          character to any space it is placed in.
        </p>
        <p>
          By buying these art prints you not only support me as a local artist
          in France, but my goal of pushing the not-so-popular narrative of
          black women and their love of water 😊.
        </p>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 345px;
  min-height: 190px;
  margin: 12px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  .gatsby-image-wrapper {
    position: absolute;
    min-height: 100%;
  }
`;

const TextWrapper = styled.div`
  flex: 2;
  min-width: 200px;
  max-width: 400px;
  margin: 12px;
  font-weight: 100;
  font-size: 1.2rem;
  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
