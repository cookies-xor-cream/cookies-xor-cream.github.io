import * as React from "react"
import { Link } from "gatsby"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

const ProjectNotFound = () => (
    <Layout currentPage="projects">
        <Seo />
        <h1>Blog Post Unavailable</h1>
        <h3>
            Seems like the project you wanna check out doesn't have a blog post written up for it yet...
        </h3>
        <h3>
            Keep an eye peeled, it'll be comming soon!
        </h3>
    </Layout>
);

export default ProjectNotFound;