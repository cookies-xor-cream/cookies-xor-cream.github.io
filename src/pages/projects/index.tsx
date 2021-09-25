import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ProjectCard from "../../components/project-card";

const SecondPage: React.FC = () => (
  <Layout currentPage="projects">
    <Seo title="projects" />
    <h1>Projects</h1>
    <ProjectCard />
  </Layout>
)

export default SecondPage
