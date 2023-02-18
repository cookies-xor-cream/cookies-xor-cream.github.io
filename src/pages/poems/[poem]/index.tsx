import React from "react"
import { graphql} from "gatsby";

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import * as styles from "./index.module.scss"

import cc from "classcat"

export default function PoemPage({ data }) {
  const poemData = {
    title: data.markdownRemark.frontmatter.displayTitle,
    __html: data.markdownRemark.html,
  }

  return (
      <Layout>
        <Seo title={poemData.title} />
        <h1 className={styles.nowrap} dangerouslySetInnerHTML={{__html: poemData.title}} />
        <div className={cc([styles.nowrap, styles.poem])} dangerouslySetInnerHTML={poemData}/>
      </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {uriTitle: {eq: $slug}}) {
      frontmatter {
        displayTitle
      }
      html
    }
  }
`