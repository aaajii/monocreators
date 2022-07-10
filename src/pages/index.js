import React from 'react'
import { useQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Highlights from "../components/Highlights"
import Artists from "../components/Artists"

const IndexPage = () => {
  const { list, people } = {
    list: [
      {
        imageUrl: "https://picsum.photos/200",
        fullName: "Joji",
      },
      {
        imageUrl: "https://picsum.photos/200",
        fullName: "Rich Brian",
      },
      {
        imageUrl: "https://picsum.photos/200",
        fullName: "Adie",
      },
      {
        imageUrl: "https://picsum.photos/200",
        fullName: "Beabadoobie",
      },
      {
        imageUrl: "https://picsum.photos/200",
        fullName: "Niki",
      },
    ],
    people: {
      A: ["Adam Healy", "Artificial Intelligence", "Another One"],
      B: ["Benedict Cucumber", "Billie Jeans", "Bilbo Boggins"],
      C: ["Chester Cee", "Cola Coca", "Creative Freedom"],
    },
  }

  return (
    <Layout>
      {/* Hero */}
      <Hero />
      {/* Highlights */}
      <Highlights list={list} />
      {/* Artists */}
      <Artists people={people} />
    </Layout>
  )
}

export default IndexPage
