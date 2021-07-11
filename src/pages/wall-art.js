import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Product from "../components/product";
import SEO from "../components/seo";
import { ProductsStyles } from "../styles/products";

const WallArtPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Wall Art" />
      <section>
        <h2>Wall Art</h2>
        <ProductsStyles>
          {data.allEtsyListing.nodes.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </ProductsStyles>
      </section>
    </Layout>
  );
};

export default WallArtPage;

export const query = graphql`
  query {
    allEtsyListing {
      nodes {
        id
        title
        price
        url
        description
        childEtsyListingImage {
          childFile {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;