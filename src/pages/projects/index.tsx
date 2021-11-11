import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ProjectCardGrid from "../../components/project-card-grid";

import projectInfo from "./projectInfo.tsx";

const SecondPage: React.FC = () => (
  <Layout currentPage="projects">
    <Seo title="projects" />
    <h1>Projects</h1>
    <h3>
      Click on a card to read its related post, the source code for most of these projects is available on <a href="https://github.com/cookies-xor-cream/">my Github</a>
    </h3>
    <ProjectCardGrid projectDetailsList={projectInfo} />
  </Layout>
)

export default SecondPage
