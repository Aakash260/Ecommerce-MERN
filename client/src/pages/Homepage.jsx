import React from 'react'
import { Helmet } from 'react-helmet'
const Homepage = () => {
  return (
    <div>
      <Helmet>
      <title>Home-ShopHub</title>
      <meta name="description" content="This is a description of the page" />
      <link rel="canonical" href="https://example.com/my-page" />
        </Helmet>
      <div className='h-[91.5vh]'>
      <h3 className='pt-40'>HomePage</h3>
      </div>
    </div>
  )
}

export default Homepage