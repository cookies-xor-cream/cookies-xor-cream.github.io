import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "./index.module.scss";

import { FaReact, FaSass, FaGithub } from 'react-icons/fa';
import { GrGatsbyjs, GrGraphQl } from 'react-icons/gr';

const IndexPage: React.FC = () => (
  <Layout>
    <Seo/>
    <h1>cookies-xor-cream</h1>

    <div className={styles.contentMatrix}>
      <div className={styles.contentBlock}>
        <h2> Welcome to my portfolio website! </h2>

        <p>
          I built this website to have somewhere to show off cool things that I have done (and to of course have something to fill out in the `website` section of any future applications potentially).
        </p>
        <p>
          I'm a second year computer science student at <a href="https://www.uwa.edu.au/">UWA</a> due to graduate at the end of 2022 and I'm working as a Jr Web Developer at <a href="https://league.agency/">The League Agency</a>/<a href="https://www.autoleague.com.au/">AutoLeague</a>.
        </p>
        <p>
          Head over to the <i>Projects</i> page if you want to see some work I've done before (as well as related blog posts) and to the <i>Contact</i> page if you'd like to get in touch with me.
        </p>
      </div>

      <div className={styles.contentBlock}>
        <h2> Tech Stack </h2>

        <ul className={styles.techStack}>
          <li><FaReact size={56} /> ReactJS</li>
          <li><GrGatsbyjs size={56} />GatsbyJS</li>
          <li><FaSass size={56} />Sass</li>
          <li><GrGraphQl size={56} />GraphQL</li>
          <li><FaGithub size={56} />Github Pages</li>
        </ul>
      </div>
      
      <div className={styles.contentBlock}>
        <h2> Skills </h2>

      </div>

      <div className={styles.contentBlock}>
        <h2> Skills </h2>

      </div>
    </div>
  </Layout>
)

export default IndexPage
