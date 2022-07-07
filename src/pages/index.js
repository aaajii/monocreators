import React from 'react'

import Layout from "../components/layout"
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Artists from '../components/Artists'

const IndexPage = ({data}) => (
  <Layout>
    Gatsby Home
    {/* Hero */}
    <Hero />
    {/* Highlights */}
    <Highlights list={data}/>
    {/* Artists */}
    <Artists people={data}/>
  </Layout>
)

export default IndexPage
