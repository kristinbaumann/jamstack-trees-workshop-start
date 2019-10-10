import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <div className="container header-wrapper">
      <h1>
        <Link to="/">Trees.</Link>
      </h1>
    </div>
  </header>
)

export default Header
