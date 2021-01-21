import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const ArticlesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  .article {
    margin-top: 1em;
    flex: 1 0 320px;
    padding: 1em;
    height: 540px;
    display: flex;
    flex-direction: column;
  }

  .article-header {
    display: block;
    position: relative;
    height: 280px;

    .gatsby-image-wrapper {
      height: 100%;

      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .wrapper {
      position: absolute;
      bottom: 0;
      padding: 1em;
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .title {
      margin-bottom: 0.5em;
    }
  }

  .article-content {
    flex: 1;
    overflow: hidden;
  }

  .article-footer {
    margin-top: 0.5em;
    padding: 1em;
    text-align: center;
    background-color: var(--medium);
    color: white;
    opacity: 70%;
    &:hover {
      opacity: 100%;
    }
  }
`

export default function Articles({ data }) {
  const articles = data.articles.nodes
  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      <Link to="/">Go back to the homepage</Link>
      <ArticlesStyled>
        {articles.map(article => (
          <div className="article" key={article.slug}>
            <Link to={`/article/${article.slug}`} className="article-header">
              <Img
                fluid={article.featuredImage.fluid}
                key={article.featuredImage.fluid.src}
                alt={article.featuredImage.title}
              />
              <div className="wrapper">
                <div className="title">{article.title}</div>
                <div className="info">{article.createdAt}</div>
              </div>
            </Link>

            <div
              className="article-content"
              dangerouslySetInnerHTML={{
                __html: article.body.childMarkdownRemark.excerpt,
              }}
            />

            <Link to={`/article/${article.slug}`} className="article-footer">
              Continuer a lire
            </Link>
          </div>
        ))}
      </ArticlesStyled>
    </Layout>
  )
}

export const query = graphql`
  query Articles {
    articles: allContentfulBlogPost {
      nodes {
        title
        slug
        createdAt(formatString: "dddd DD MMM yyyy", locale: "FR")
        featuredImage {
          fluid(maxWidth: 980) {
            ...GatsbyContentfulFluid
          }
        }
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 320, format: HTML)
          }
        }
      }
    }
  }
`
