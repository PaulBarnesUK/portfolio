import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../assets/scss/style.scss'
import Header from './../components/header';
import Footer from './../components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: `/apple-touch-icon.png` },
        { rel: 'icon', sizes: '32x32', href: `/favicon-32x32.png` },
        { rel: 'icon', sizes: '16x16', href: `/favicon-16x16.png` },
        { rel: 'manifest', href: `/site.webmanifest` },
        { rel: 'mask-icon', href: `/safari-pinned-tab.svg`, color: `#5bbad5` },
      ]}
    />
    <Header/>
    <div className="page">
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
