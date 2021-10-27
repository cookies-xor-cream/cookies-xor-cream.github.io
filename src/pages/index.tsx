import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo/>
    <h1>cookies-xor-cream</h1>

    <h2> Welcome to my portfolio website! </h2>
    <p>
      I built this website to have somewhere to show off cool things that I have done (and to of course have something to fill out in the `website` section of any future applications potentially).
    </p>
    <p>
      I'm a second year computer science student at <a href="https://www.uwa.edu.au/">UWA</a> due to graduate at the end of 2022 and I'm working as a Jr Web Developer at <a href="https://league.agency/">The League Agency</a>/<a href="https://www.autoleague.com.au/">AutoLeague</a>.
    </p>

    <h2> Tech Stack </h2>
    <p>
      This website is built to only have a front-end (not back-end) and therefore able to be deployed on <a href="https://pages.github.com/">Github Pages</a>.
      <br/>
      It's built using the following technologies:
      <ul>
        <li>
          React: a component-based front-end framework for quickly developping websites and UIs
        </li>
        <li>
          GatsbyJS: a React-based, GraphQL powered, static site generator
        </li>
        <li>
          Sass: a CSS framework with quality-of-life features such as variables and class nesting
        </li>
        <li>
          GraphQL: a query language to request for content from the website
        </li>
        <li>
          Github Pages: a free place to host the website with little fuss
        </li>
      </ul>
    </p>
    <p>

    </p>
  </Layout>
)

export default IndexPage
