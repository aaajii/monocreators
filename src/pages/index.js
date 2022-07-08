import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Artists from '../components/Artists'

const IndexPage = () => { 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return(
  <Layout>
    {/* Hero */}
    <Hero />
    {/* Highlights */}
    <Highlights list={data}/>
    {/* Artists */}
    <Artists people={data}/>
  </Layout>
)}

export default IndexPage
