import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import * as STD from '../components/Post/styled';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <STD.PostHeader>
        <STD.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </STD.PostDate>
        <STD.PostTitle> {post.frontmatter.title} </STD.PostTitle>
        <STD.PostDescription> {post.frontmatter.description} </STD.PostDescription>
      </STD.PostHeader>
      <STD.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </STD.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;