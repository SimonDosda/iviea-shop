import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProductStyles = styled.div`
  position: relative;

  a:hover {
    color: var(--primary-4);
  }

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  .title {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 10;
    text-align: center;

    h2 {
      font-size: 0.8em;
      margin: 0;
    }
    p {
      font-size: 0.8em;
      margin: 0;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    max-height: 400px;
    img {
      object-fit: cover;
    }
  }
`;

export default function Product({ product }) {
  const parseString = (inputString) => inputString.replace("&#39;", "'");
  return (
    <ProductStyles>
      <a href={product.url}>
        <GatsbyImage
          image={getImage(product.childEtsyListingImage.childFile)}
          alt={parseString(product.title)}
        />
        <div className="title">
          <h2>{parseString(product.title)}</h2>
          <p>From ${product.price}</p>
        </div>
      </a>
    </ProductStyles>
  );
}
