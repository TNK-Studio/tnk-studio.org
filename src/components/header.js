import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header >
    <div
      class="mx-auto max-w-4xl flex justify-between pt-6"
    >
      <h1 class="text-white text-4xl">
        <Link
          to="/"
        >
          TNK
        </Link>
      </h1>
      <div >
        <Link
          to="/about"
          class="pl-2"
        >
          关于
      </Link>
        <Link
          class="pl-2"
          to="/contact"
        >
          联系
      </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
