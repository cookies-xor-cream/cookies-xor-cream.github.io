import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

import BoidsVid from "/src/videos/boids_demo.webm";

import * as styles from "../project-styles.module.scss";
console.log(styles);

const IndexPage: React.FC = () => (
  <Layout>
    <Seo/>
    <h1>Boids</h1>
    <div className={styles.projectPost}>
        <video autoPlay loop className={styles.projectVideo}>
            <source src={BoidsVid} />
        </video>

        <h2>
            What Are Boids?
        </h2>
        <p>
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>

        <h2>
            Behaviour Rules
        </h2>

        <h3>
            Cohesion
        </h3>
        <p>
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>

        <h3>
            Separation
        </h3>
        <p>
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>

        <h3>
            Alignment
        </h3>
        <p>
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
    </div>
  </Layout>
)

export default IndexPage
