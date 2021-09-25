import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage: React.FC = () => (
  <Layout currentPage="project">
    <Seo title="Page two" />
    <h1>Projects</h1>
  </Layout>
)

export default SecondPage
