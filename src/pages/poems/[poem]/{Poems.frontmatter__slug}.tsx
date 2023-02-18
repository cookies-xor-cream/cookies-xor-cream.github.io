import React from "react"
import { graphql } from "gatsby"

import Layout from "/src/components/layout"
import Seo from "/src/components/seo";

import * as styles from "/src/pages/projects/project-styles.module.scss";

export default function ProjectPost({ data }) {
  const rawData = data.markdownRemark;

  const postData = {
      title: rawData.frontmatter.title,
      timeest: rawData.frontmatter.timeest,
      __html: rawData.html,
  };

  return (
      <Layout currentPage="projects">
          <Seo/>
          <h1>{postData.title}</h1>
      </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        timeest
      }
      html
    }
  }
`
