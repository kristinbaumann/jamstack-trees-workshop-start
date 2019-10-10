import React from "react"

const Tree = () => (
  <span role="img" aria-label="evergreen-tree">
    🌲
  </span>
)

const Footer = () => (
  <footer className="footer-wrapper">
    <Tree />A JAMstack project by{" "}
    <a
      href="https://www.kristin-baumann.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Kristin Baumann
    </a>{" "}
    on{" "}
    <a
      href="https://github.com/kristinbaumann/jamstack-trees"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>
    .
    <Tree />
  </footer>
)

export default Footer
