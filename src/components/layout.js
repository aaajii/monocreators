import React, { cloneElement } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="p-4 pt-0">
        <main>{cloneElement(children, { data })}</main>
      </div>
    </>
  )
}

export default Layout
