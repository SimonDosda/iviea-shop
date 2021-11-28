import { graphql, Link } from "gatsby";
import React from "react";
import HerWavesArticle from "../articles/herwaves";
import WavepoolArticle from "../articles/wavepool";
import Layout from "../components/layout";
import Product from "../components/product";
import Seo from "../components/seo";
import { LinkButton } from "../styles/button";
import { ProductsStyles } from "../styles/products";
import { SectionTitle } from "../styles/title";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <section>
        <SectionTitle>Wall Art</SectionTitle>
        <ProductsStyles>
          {data.allEtsyListing.nodes.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </ProductsStyles>
        <LinkButton>
          <Link to="/wall-art">See all posters</Link>
        </LinkButton>
      </section>

      <section>
        <SectionTitle>Articles</SectionTitle>
        <HerWavesArticle />
        <WavepoolArticle />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allEtsyListing(limit: 6) {
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
