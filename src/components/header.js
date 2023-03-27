import * as React from "react"
import { Link } from "gatsby"
import CssBaseline  from "@mui/material/CssBaseline"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      borderBottom: "1px solid #d1c1e0",
      fontSize: `var(--font-sm)`,
      listStyleType: `none`,
    }}
  >
    <CssBaseline />
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
      <span style={{ color: `white` }}>You're not logged in.</span>
      <nav>
          <ul style={{
            display: `flex`,
            flex: 1,
            listStyleType: `none`,
            margin: `0rem`,
          }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  paddingLeft: `1rem`,
                  margin: `0rem`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
  </header>
)

export default Header
