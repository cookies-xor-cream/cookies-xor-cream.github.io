/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { ReactNode } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Navbar from "./navbar";
import "./styles/index.scss";

type Props = {
  children?: ReactNode[] | [];
  currentPage?: string | "";
}

const Layout: React.FC<Props> = ({ children, currentPage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar currentPage={currentPage ? currentPage : "/"} />
      <div className="wave-wrapper">
        <div className="wave" />
      </div>
      <div className="main">
        <main>{children}</main>
        <footer>
          Built with Gatsby, React, and SASS
        </footer>
      </div>
    </>
  )
}

export default Layout
