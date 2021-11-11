import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

import * as styles from "./tech.module.scss";

import technologies from "../../pageData/technologies/technologies";
import TechCard from "../../components/technologies/techCard";

const IndexPage: React.FC = () => (
    <Layout currentPage="technologies">
        <Seo/>
        <h1>Technologies</h1>
        <div className={styles.techGrid}>
            {
                technologies.map(
                    tech => <TechCard
                        Logo={tech.logo}
                        name={tech.name}
                        desc={tech.desc}
                        id={tech.id}
                    />
                )
            }
        </div>
    </Layout>
)

export default IndexPage
