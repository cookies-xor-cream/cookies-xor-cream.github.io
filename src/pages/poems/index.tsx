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
            }
            fieldValue
          }
        }
      }      
    `).allMarkdownRemark.group;
    
    const sectionsData = sectionsRawData.map(group => ({
        section: group.fieldValue,
        poems: group.nodes.map(node => ({
            title: node.frontmatter.title,
        }))
    })).sort(group => -group.poems.length)

    return (
      <Layout>
        <Seo title="404: Not found" />
        <ul>
          {sectionsData.map(sectionInfo => (
            <li><a href={sectionInfo.section}>
              {sectionInfo.section}
            </a></li>
          ))}
        </ul>
      </Layout>
    );
}

export default PoemSections
