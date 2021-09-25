import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage: React.FC = () => (
  <Layout currentPage="about">
    <Seo title="about" />
    <h1>About</h1>
  </Layout>
)

export default SecondPage
