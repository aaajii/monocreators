import React from "react"

function Artists({ people }) {
  return (
    <div className="p-8 sm:p-12">
      {Object.keys(people).map(group => (
        <>
          <div className="m-4 sm:m-8">
            <h1 className="text-orange-400 font-bold">{group}</h1>
            <div className="flex flex-wrap my-4 sm:my-8">
              {people[group].map(person => (
                <span className="mx-2 sm:mx-12 sm:first:ml-0 text-lg">
                  {person}
                </span>
              ))}
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}

export default Artists
