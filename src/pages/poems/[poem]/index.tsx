import React from "react"
import { graphql} from "gatsby";

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

export default function PoemPage({ data }) {
  const poemData = {
    title: data.markdownRemark.frontmatter.displayTitle,
    __html: data.markdownRemark.html,
  }

  return (
      <Layout>
        <Seo title={poemData.title} />
        <h1>{poemData.title}</h1>
        <div dangerouslySetInnerHTML={poemData}/>
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