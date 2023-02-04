import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import cc from "classcat";

const PoemSections: React.FC = () => {
    const sectionsRawData = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/poems/**"}}) {
          group(field: frontmatter___section) {
            nodes {
              frontmatter {
                title
              }
            }
            fieldValue
          }
        }
      }      
    `).allMarkdownRemark.group;

    
    const a = sectionsRawData.map(group => ({
        section: group.fieldValue,
        poems: group.nodes.map(node => ({
            title: node.frontmatter.title,
        }))
    }))

    console.log(a)

    return null;
}

export default PoemSections
