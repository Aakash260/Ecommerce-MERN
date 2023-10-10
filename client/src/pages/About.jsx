import React from 'react'
import {Helmet} from 'react-helmet'
const About = () => {
  return (
    <div>
      <Helmet>
      <title>About-ShopHub</title>
      <meta name="description" content="This is a description of the page" />
        </Helmet>
        <div className="sm:flex items-center max-w-screen-xl h-[91.5vh]">
        <div className="sm:w-1/2 p-10">
      <div className="image object-center text-center">
        <img src="https://i.imgur.com/WbQnbas.png" />
      </div>
        </div>
        <div className="sm:w-1/2 p-5">
      <div className="text">
        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
          doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
          voluptatum.
        </p>
      </div>
        </div>
      </div>
    </div>

  )
}

export default About