import React from "react"

const Layout = ({ children }) => {

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
