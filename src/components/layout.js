/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import bg from '../images/bg.jpg'
import '../styles/tailwind.css';


import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
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
    <div class="bg-cover h-screen" style={{ backgroundImage: `url(${bg})` }} >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        class="max-w-4xl mx-auto"
      >
        <main>{children}</main>
        <footer class="text-center mt-10">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" class="text-blue-700">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
