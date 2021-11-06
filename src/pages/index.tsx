import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/skill-bar"

import SkillBar from "../components/skill-bar";
import TechStack from "../components/home/TechStack";

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

        <ul className={styles.skills}>
          <li>
            <ul>
              <li>
                <FaLinux size={skillsLogoSize} />
                <SiGnubash size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={9} />
              </li>
            </ul>
          </li>
          
          <li>
            <ul>
              <li>
                <FaHtml5 size={skillsLogoSize} />
                <FaCss3 size={skillsLogoSize} />
                <FaJs size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={8} />
              </li>
            </ul>
          </li>
          
          <li>
            <ul>
              <li>
                <FaReact size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={7} />
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <FaPython size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={7} />
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <SiC size={skillsLogoSize} />
                <SiCplusplus size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={7} />
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <GrMysql size={skillsLogoSize} />
                <SiPostgresql size={skillsLogoSize} />
                <DiSqllite size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={6} />
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <FaJava size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={5} />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={cc([styles.contentBlock, styles.techBlock])}>
        <h2> Tech Stack </h2>

        <TechStack stack={[
          {logo: FaReact, name: "ReactJS"},
          {logo: GrGatsbyjs, name: "GatsbyJS"},
          {logo: FaSass, name: "Sass"},
          {logo: GrGraphQl, name: "GraphQL"},
          {logo: FaGithub, name: "Github Pages"}
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
