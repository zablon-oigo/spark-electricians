import React from 'react'
import Faq from 'react-faq-component';
function Questions() {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "What is the package version",
        content: "v1.0.5"
      }]
  }
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-800  text-white md:px-20 md:py-20 px-5 py-10">
      <div className="">
        <h2 className="capitalize text-white text-6xl text-center font-semibold">
          frequently asked questions
        </h2>
        <div className="my-20 bg-white shadow-2xl">
        <div>
        <Faq data={data} />
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Questions