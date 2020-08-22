import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

import * as STD from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title} 
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />

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

      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;