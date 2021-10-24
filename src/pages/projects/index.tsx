import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ProjectCardGrid from "../../components/project-card-grid";

const pdl = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

const SecondPage: React.FC = () => (
  <Layout currentPage="projects">
    <Seo title="projects" />
    <h1>Projects</h1>
    <ProjectCardGrid projectDetailsList={pdl} />
  </Layout>
)

export default SecondPage
