import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage: React.FC = () => (
  <Layout currentPage="contact">
    <Seo title="contact" />
    <h1>Contact</h1>
  </Layout>
)

export default SecondPage
