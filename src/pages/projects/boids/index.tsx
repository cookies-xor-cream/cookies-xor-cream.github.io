import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

const IndexPage: React.FC = () => (
  <Layout>
    <Seo/>
    <h1>Boids</h1>
  </Layout>
)

export default IndexPage
