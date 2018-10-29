import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './footer'
import Header from './header'
import 'typeface-montserrat'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    font-family: 'typeface-montserrat', sans-serif;
}
`

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 15px;
  padding-top: 50px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            peterContact
            work
            homepage
            people
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <StyledLayout className={`layout`}>
          <Header contact={data.site.siteMetadata.peterContact} />
          {children}
          <Footer
            work={data.site.siteMetadata.work}
            homepage={data.site.siteMetadata.homepage}
            people={data.site.siteMetadata.people}
          />
        </StyledLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
