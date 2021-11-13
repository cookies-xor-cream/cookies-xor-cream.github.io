import React from "react"
import { graphql } from "gatsby"

import Layout from "/src/components/layout"
import Seo from "/src/components/seo";

import * as styles from "/src/pages/projects/project-styles.module.scss";

import InfoGrid from "/src/components/projects/info-grid";

import techlinks from "/src/pageData/projects/techlinks";
import prereqs from "/src/pageData/projects/prereqs";
import videos from "/src/pageData/projects/videos";

export default function ProjectPost({ data }) {
  const rawData = data.markdownRemark;

  const postData = {
      title: rawData.frontmatter.title,
      video: videos[rawData.frontmatter.videoName],
      overview: rawData.frontmatter.overview,
      prereqs: rawData.frontmatter.prereqs.map(prereq => prereqs[prereq]),
      techStack: rawData.frontmatter.techStack.map(tech => techlinks[tech]),
      difficulty: rawData.frontmatter.difficulty,
      timeest: rawData.frontmatter.timeest,
      __html: rawData.html,
      tableOfContents: rawData.tableOfContents,
  };

  return (
      <Layout currentPage="projects">
          <Seo/>
          <h1>{postData.title}</h1>

          <InfoGrid
              vidSrc={postData.video}
              timeEstimate={postData.timeest}
              difficulty={postData.difficulty}
              overview={postData.overview}
              techStack={postData.techStack}
              prereqs={postData.prereqs}
          />

          <div
              className={styles.projectPost}
              dangerouslySetInnerHTML={postData}
          />
      </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        overview
        title
        prereqs
        difficulty
        techStack
        timeest
        videoName
      }
      html
      tableOfContents
    }
  }
`