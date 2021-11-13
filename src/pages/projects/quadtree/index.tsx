import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

import * as styles from "../project-styles.module.scss";

import InfoGrid from "../../../components/projects/info-grid";

import techlinks from "../../../pageData/projects/techlinks";
import prereqs from "../../../pageData/projects/prereqs";
import videos from "../../../pageData/projects/videos";

import QuadVid from "../../../videos/artorias_quadtree.webm";

// const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//     }
//   }
// `

const IndexPage: React.FC = () => {
    const rawData = useStaticQuery(graphql`
        {
          markdownRemark(frontmatter: {slug: {eq: "/projects/quadtree/"}}) {
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
    `).markdownRemark;

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

export default IndexPage
