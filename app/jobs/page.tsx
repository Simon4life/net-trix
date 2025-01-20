import React from 'react'
import Listing from '../components/JobListing/Listing'

function JobListing() {
  return (
    <div className='bg-[#082D50] pt-40 px-[10%] text-white p-[7.75%] pb-[320px]'>
      <h1 className="text-center text-2xl font-bold mb-5">Job Listings & Advert</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {[1, 2, 3, 4, 5, 6].map(i => {
          return <Listing key={i} title={"Developer"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} link={"https://www.google.com"} />
        })}
      </div>
    </div>
  )
}

export default JobListing