import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Article({ data: { article } }) {
  return (
    <Layout>
      <SEO title={article.title} />
      <h1>{article.title}</h1>
      <Link to="/">Go back to the homepage</Link>
      <div>
        <p>
          <Link to={`/article/${article.slug}`}>{article.title}</Link>
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Article($slug: String!) {
    article: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      createdAt
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
