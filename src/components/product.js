import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProductStyles = styled.a`
  position: relative;
  display: block;
  border-radius: 12px;
  overflow: hidden;

  &:hover {
    --d: 0;
    --p: 0;
    .title {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }

  .title {
    padding: 12px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);

    h2 {
      font-size: 0.7em;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-size: 0.8em;
      margin: 0;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
    }
  }
`;

export default function Product({ product }) {
  const parseString = (inputString) => inputString.replace("&#39;", "'");
  return (
    <ProductStyles href={product.url}>
      <GatsbyImage
        image={getImage(product.childEtsyListingImage.childFile)}
        alt={parseString(product.title)}
      />
      <div className="title">
        <h2>{parseString(product.title)}</h2>
        <p>From ${product.price}</p>
      </div>
    </ProductStyles>
  );
}
