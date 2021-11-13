import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ProjectCardGrid from "../../components/project-card-grid";

import projectInfo from "../../pageData/projects/projectInfo.tsx";
import videos from "../../pageData/projects/videos.tsx";

const SecondPage: React.FC = () => (
  <Layout currentPage="projects">
    <Seo title="projects" />
    <h1>Projects</h1>
    <h3>
      Click on a card to read its related post, the source code for most of these projects is available on <a href="https://github.com/cookies-xor-cream/">my Github</a>
    </h3>
    <ProjectCardGrid projectDetailsList={projectInfo} />
  </Layout>
)

const IndexPage = ({
  data: { allMarkdownRemark: { nodes } }
}) => {
  const projectData = nodes.map(data => {return {
    href: data.frontmatter.slug,
    title: data.frontmatter.title,
    description: data.frontmatter.carddesc,
    tags: data.frontmatter.tags,
    vid: videos[data.frontmatter.videoName]
  }})

  console.log("???", projectData);

  return (
    <Layout currentPage="projects">
      <Seo title="projects" />
      <h1>Projects</h1>
      <h3>
        Click on a card to read its related post, the source code for most of these projects is available on <a href="https://github.com/cookies-xor-cream/">my Github</a>
      </h3>
      <ProjectCardGrid projectDetailsList={projectData} />
    </Layout>
  );
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          carddesc
          videoName
          tags
        }
      }
    }
  }
`
