import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

const ProductsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  .product {
    margin-top: 1em;
    flex: 1 0 320px;
    padding: 1em;
    display: flex;
    flex-direction: column;
  }

  .footer {
    display: flex;
    .name {
      flex: 1;
    }
    .price {
      color: var(--black);
    }
  }
`

export default function Products({ data }) {
  const products = data.products.nodes

  const getMinPrice = product =>
    Math.min(...product.variant.map(variant => variant.retailPrice))
  return (
    <Layout>
      <SEO title="Products" />
      <h1>Products</h1>
      <Link to="/">Go back to the homepage</Link>
      <ProductsStyled>
        {products.map(product => (
          <Link
            to={`/product/${product.slug}`}
            className="product"
            key={product.slug}
          >
            <Img
              fluid={product.images[0].fluid}
              key={product.images[0].fluid.src}
              alt={product.images[0].title}
            />
            <div className="footer">
              <div className="name">{product.name}</div>
              <div className="price">
                Starting from <span>{getMinPrice(product)}</span> euros
              </div>
            </div>
          </Link>
        ))}
      </ProductsStyled>
    </Layout>
  )
}

export const query = graphql`
  query Products {
    products: allContentfulProduct {
      nodes {
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
  }
`
