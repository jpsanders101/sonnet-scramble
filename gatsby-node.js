const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const sonnets = await graphql(`
    query {
      allSonnetsJson {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  sonnets.data.allSonnetsJson.edges.forEach(sonnetNode => {
    createPage({
      path: sonnetNode.node.title,
      component: path.resolve(`./src/templates/sonnet.js`),
      context: {
        title: sonnetNode.node.title,
      },
    })
  })
}
