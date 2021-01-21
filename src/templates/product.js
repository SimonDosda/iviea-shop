import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

const ProductStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  .images {
    flex: 1;
  }

  .info {
    flex: 1;
  }
`

export default function Product({ data: { product } }) {
  return (
    <Layout>
      <SEO title={product.name} />
      <h1>{product.name}</h1>
      <Link to="/">Go back to the homepage</Link>
      <ProductStyled>
        <div className="images">
          <Img
            fluid={product.images[0].fluid}
            key={product.images[0].fluid.src}
            alt={product.images[0].title}
          />
        </div>
        <div className="info">
          <h2>{product.name}</h2>
          <ul>
            {product.variant.map(variant => (
              <li key={variant.name}>
                {variant.name}: {variant.retailPrice} {"euros "}
                <button
                  className="snipcart-add-item"
                  data-item-id={variant.sku}
                  data-item-name={product.name}
                  data-item-url={"/product/" + variant.slug}
                  data-item-description={product.name + " - " + variant.name}
                  data-item-price={variant.retailPrice}
                  data-item-image={product.images[0].fluid.src}
                  data-item-quantity="1"
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </ProductStyled>
      <div
        dangerouslySetInnerHTML={{
          __html: product.description.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query Product($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      name
      slug
      sku
      images {
        fluid(maxWidth: 980) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      variant {
        name
        sku
        retailPrice
        images {
          fluid(maxWidth: 980) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
