import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

import * as styles from "../project-styles.module.scss";

import overview from "../../../pageData/projects/quadtree/overview";

// const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//     }
//   }
// `

const IndexPage: React.FC = () => {
    const postData = {__html: useStaticQuery(graphql`
      query {
        markdownRemark(frontmatter: {slug: {eq: "/projects/quadtree/"}}) {
          html
        }
      }
    `).markdownRemark.html}

    console.log("pd", postData);

    return (
        <Layout currentPage="projects">
            <Seo/>
            <h1>Quadtree Image Compression</h1>

            {overview}
            
            <div
                className={styles.projectPost}
                dangerouslySetInnerHTML={postData}
            />
        </Layout>
    )
}

export default IndexPage
