import React from "react"

const Layout = ({ children }) => {

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="p-4 pt-0">
        {children}
      </div>
    </>
  )
}

export default Layout
