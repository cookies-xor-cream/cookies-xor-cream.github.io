import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/slidebar"

import RecentPosts from "../components/home/RecentPosts";
import TechStack from "../components/home/TechStack";
import Skills from "../components/home/Skills";

import cc from "classcat";

import * as styles from "./index.module.scss";

import recentPosts from "../pageData/recentPosts";
import techStack from "../pageData/techStack";
import skills from "../pageData/skills";

const IndexPage: React.FC = () => {
  const recentPostRawData = useStaticQuery(graphql`{
    allMarkdownRemark(
      filter: {
        frontmatter: {overview: {ne: ""}},
        fileAbsolutePath: {glob: "**/projects/*.md"}
      },
      sort: {fields: frontmatter___date, order: DESC},
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          slug
          overview
        }
        timeToRead
      }
    }
  }`).allMarkdownRemark.nodes;

  console.log('!!!', recentPostData)

  const recentPostData = recentPostRawData.map(post => {
    return {
      title: post.frontmatter.title,
      overview: post.frontmatter.overview,
      date: post.frontmatter.date,
      slug: post.frontmatter.slug,
      timeToRead: post.timeToRead
    }
  })

  return (
    <Layout>
      <h1 className={"segmentedHeader"}>
        <p>cookies</p>
        <p>xor</p>
        <p>cream</p>
      </h1>

      <div className={styles.contentMatrix}>
        <div className={cc([styles.contentBlock, styles.introBlock])}>
          <h2> Welcome to my site! </h2>
          <p>
            Welcome! This is somewhere for me to publish projects I'd like to
            share, if you're interested in them head over to <a href="/projects">Projects</a> and check them out!
          </p>

          <p>
            A lot of them have a very math heavy approach but even without the
            maths a novice programmer should still be able to follow them,
            just with less depth of understanding.
          </p>
        </div>
  
        <div className={cc([styles.contentBlock, styles.skillsBlock])}>
          <h2> Skills </h2>
  
          <Skills skillList={skills} />
        </div>
  
        <div className={cc([styles.contentBlock, styles.techBlock])}>
          <h2> Tech Stack </h2>
  
          <TechStack stack={techStack} />
        </div>
  
        <div className={cc([styles.contentBlock, styles.recentPosts])}>
          <h2> Recent Posts </h2>
  
          <RecentPosts posts={recentPostData} />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage
