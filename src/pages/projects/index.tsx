import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ProjectCardGrid from "../../components/project-card-grid";

import videos from "../../pageData/projects/videos.tsx";
import tagdata from "../../pageData/projects/tagdata";

const ProjectsPage = ({
  data: { allMarkdownRemark: { nodes } }
}) => {
  const projectData = nodes.map(data => {return {
    href: data.frontmatter.slug,
    title: data.frontmatter.title,
    description: data.frontmatter.carddesc,
    tags: data.frontmatter.tags.map(tag => tagdata[tag]),
    vid: videos[data.frontmatter.videoName]
  }})

  return (
    <Layout currentPage="projects">
      <Seo title="projects" />
      <h1>Projects</h1>
      <h3 className="outline">
        Click on a card to read its related post,
        the source code for most of these projects is available on
        <a href="https://github.com/cookies-xor-cream/">my Github</a>
      </h3>
      <ProjectCardGrid projectDetailsList={projectData} />
    </Layout>
  );
}
export default ProjectsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date},
      filter: {
        frontmatter: {overview: {ne: ""}},
        fileAbsolutePath: {glob: "**/projects/*.md"}
      }) {
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
