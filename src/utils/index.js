export const aggregateImages = (imageQuery) => imageQuery
  .edges
  .reduce((obj, edge) => ({
    ...obj,
    [edge.node.relativePath.replace(/\..+$/, "")]: edge.node.childImageSharp.fluid
  }), {})
