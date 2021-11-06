import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/home/Skills/skill-bar"

import TechStack from "../components/home/TechStack";
import Skills from "../components/home/Skills";

import cc from "classcat";

import * as styles from "./index.module.scss";

import {
  FaReact,
  FaSass,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaLinux
} from 'react-icons/fa';

import {
  GrGatsbyjs,
  GrGraphQl,
  GrMysql
} from 'react-icons/gr';

import {
  SiC,
  SiCplusplus,
  SiGnubash,
  SiPostgresql
} from 'react-icons/si';

import {
  DiSqllite
} from 'react-icons/di';

const skillsLogoSize = 32;
const techLogoSize = 56;

const IndexPage: React.FC = () => (
  <Layout>
    <h1>cookies-xor-cream</h1>

    <div className={styles.contentMatrix}>
      <div className={styles.contentBlock}>
        <h2> Welcome to my portfolio website! </h2>
        <p>
          Welcome! This is somewhere for me to publish information and projects I'd like to share, if you're interested in them head over to <a href="/projects">Projects</a> and check them out!
        </p>

        <p>
          The intended audience is for people who already have a little programming background but all of the terms are searchable so anyone should be able to read them.
        </p>
      </div>

      <div className={cc([styles.contentBlock, styles.skillsBlock])}>
        <h2> Skills </h2>

        <Skills skillList={[
          { logos: [FaLinux, SiGnubash], skillLevel: 9 },
          { logos: [FaHtml5, FaCss3, FaJs], skillLevel: 8 },
          { logos: [FaReact], skillLevel: 7 },
          { logos: [FaPython], skillLevel: 7 },
          { logos: [SiC, SiCplusplus], skillLevel: 7 },
          { logos: [GrMysql, SiPostgresql, DiSqllite], skillLevel: 6 },
          { logos: [FaJava], skillLevel: 5 },
        ]} />
      </div>

      <div className={cc([styles.contentBlock, styles.techBlock])}>
        <h2> Tech Stack </h2>

        <TechStack stack={[
          { logo: FaReact, name: "ReactJS" },
          { logo: GrGatsbyjs, name: "GatsbyJS" },
          { logo: FaSass, name: "Sass" },
          { logo: GrGraphQl, name: "GraphQL" },
          { logo: FaGithub, name: "Github Pages" }
        ]} />
      </div>

      <div className={cc([styles.contentBlock, styles.recentPosts])}>
        <h2> Recent Posts </h2>

        <ul>
          {/* <RecentPost /> */}
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
