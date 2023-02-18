/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query MyQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/poems/**"}}) {
          nodes {
            frontmatter {
              uriTitle
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
      const uriTitle = node.frontmatter.uriTitle
      const slug = `/poems/${uriTitle}`
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/pages/poems/[poem]/index.tsx`),
        context: { slug: uriTitle },
      })
    })
  }