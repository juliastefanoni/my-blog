import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

import * as STD from '../components/ListWrapper/styled'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO 
        title="Home"
        description="Um blog de uma jovem desenvolvedora fullstack apaixonada 
        por tecnologia, amante de brócolis e dogs!"
      />
      <STD.listWrapper>
        {postList.map(({ 
          node: { 
            frontmatter: { background, category, date, title, description },
            timeToRead,
            fields: { slug }
          },
        }) => (
          <PostItem
            background={background}
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            key={slug}
          />
        ))}; 
      </STD.listWrapper>
      <Pagination 
        isFirst={isFirst} 
        isLast={isLast} 
        currentPage={currentPage} 
        numPages={numPages} 
        prevPage={prevPage} 
        nextPage={nextPage} 
      />
      
    </Layout>
  )
}

export const query = graphql`
query($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
    limit: $limit,
    skip: $skip
  ) {
    edges {
      node {
        frontmatter {
          background
          category
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
}
`;

export default BlogList;