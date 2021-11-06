import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/skill-bar"

import SkillBar from "../components/skill-bar";

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
  GrGraphQl
} from 'react-icons/gr';

import {
  SiC,
  SiCplusplus,
  SiGnubash,
} from 'react-icons/si'

const skillsLogoSize = 32;
const techLogoSize = 56;

const IndexPage: React.FC = () => (
  <Layout>
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
                <FaJava size={skillsLogoSize} />
              </li>
              <li>
                <SkillBar skillLevel={6} />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={cc([styles.contentBlock, styles.techBlock])}>
        <h2> Tech Stack </h2>

        <ul className={styles.techStack}>
          <li><FaReact size={techLogoSize} /> ReactJS</li>
          <li><GrGatsbyjs size={techLogoSize} />GatsbyJS</li>
          <li><FaSass size={techLogoSize} />Sass</li>
          <li><GrGraphQl size={techLogoSize} />GraphQL</li>
          <li><FaGithub size={techLogoSize} />Github Pages</li>
        </ul>
      </div>

      <div className={cc([styles.contentBlock, styles.skillsBlock])}>
        <h2> Recent Posts </h2>

        <ul>
          <li>

          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
