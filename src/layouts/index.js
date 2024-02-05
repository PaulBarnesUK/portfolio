import React from 'react'
import PropTypes from 'prop-types'

import "../assets/scss/style.scss";
import Header from './../components/header';
import Footer from './../components/footer'

export default function Layout ({ children }) {

  return (
    <>
      <Header/>
      <div className="page">
        {children}
      </div>
      <Footer />
    </>
  )

}

Layout.propTypes = {
  children: PropTypes.func,
}
