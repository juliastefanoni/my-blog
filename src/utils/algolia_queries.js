const postsQuery = `{
    posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          category
          background
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        excerpt(pruneLength: 5000)
        fields {
          slug
        }
      }
    }
  }
}
`;

const flatten = arr => arr.map(({ node: { frontmatter, ...rest }}) => ({
  ...frontmatter,
  date_timestamp: parseInt(
    (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
  ),
  ...rest
}));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: 'posts', 
    settings: {
      attributesToSnippet: ['excerpet:20']
    },
  },
];

module.exports = queries;