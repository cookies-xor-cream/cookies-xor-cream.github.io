import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import cc from "classcat";

const PoemSections: React.FC = () => {
  const sectionsRawData = useStaticQuery(graphql`
  query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/poems/**"}}) {
        group(field: frontmatter___section) {
          nodes {
            frontmatter {
              title
              displayTitle
              uriTitle
            }

            wordCount {
              words
            }
          }
          fieldValue
        }
      }
    }
  `).allMarkdownRemark.group;

  const sectionsData = sectionsRawData.map(group => ({
      section: group.fieldValue,
      poems: group.nodes.map(node => ({
          title: node.frontmatter.displayTitle,
          uri: node.frontmatter.uriTitle,
          words: node.wordCount.words,
      }))
  })).sort(group => -group.poems.length)

  return (
    <Layout>
      <Seo title="poems"/>
      <ul>
        {sectionsData.map(sectionInfo => (
          <li>
            {sectionInfo.section}
            <ul>
              {sectionInfo.poems.map(poem => (
                <li><a href={`/poems/${poem.uri}`}>
                  {poem.title} <br/>
                  {poem.words} words
                </a></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default PoemSections
