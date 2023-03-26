/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline  from "@mui/material/CssBaseline"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}> 
      <CssBaseline />
      {children}
    </ThemeProvider> 
  )
}

export default Layout
