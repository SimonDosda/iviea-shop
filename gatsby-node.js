import path from "path"

async function turnProductsIntoPages({ graphql, actions }) {
  const productTemplate = path.resolve("./src/templates/product.js")
  const { data } = await graphql(`
    query {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  data.products.nodes.forEach(product => {
    actions.createPage({
      path: `product/${product.slug}`,
      component: productTemplate,
      context: { slug: product.slug },
    })
  })
}

async function turnArticlesIntoPages({ graphql, actions }) {
  const articleTemplate = path.resolve("./src/templates/article.js")
  const { data } = await graphql(`
    query {
      articles: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)
  data.articles.nodes.forEach(article => {
    actions.createPage({
      path: `article/${article.slug}`,
      component: articleTemplate,
      context: { slug: article.slug },
    })
  })
}

export async function createPages(params) {
  await Promise.all([
    turnProductsIntoPages(params),
    turnArticlesIntoPages(params),
  ])
}
