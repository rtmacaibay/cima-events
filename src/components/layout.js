/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Helmet } from "react-helmet"
import "./layout.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { grey } from '@mui/material/colors'
import CssBaseline  from "@mui/material/CssBaseline"

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0A1929',
            paper: '#1c2c3f',
        },
        text: {
            primary: '#fff',
            secondary: grey[500],
        },
    },
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata{
          title
          menuLinks{
            name
            link
          }
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline enableColorScheme/>
      <Helmet
        title={'Cima Events'}
        meta={[
          { name: 'description', content: 'Prepare to see your events with Cima! Cima... Events!' },
          { name: 'keywords', content: 'cima, events, events management, events tracker' },
        ]}
      ></Helmet>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      {children}
    </ThemeProvider> 
  )
}

export default Layout
