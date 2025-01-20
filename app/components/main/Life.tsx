import React from 'react'
import LifeCards from './sub/LifeCards'

const Life = () => {
  return (
    <div className=' py-20 px-40'>
        <h1 className="text-center pb-5 text-[40px]">Explore Opportunities</h1>
        <p className="text-center text-[18px]">What&apos;s destination next? Is it better technology? A better you? Or a better community of makers? Wherever you desire to go, we give you the tools, the techniques, and the teams to navigate the journey. So you’re inspired to build what’s next, ensure your career never stands still, and navigate further together. Move forward. Take the world with you.</p>
        <div className="flex justify-center gap-10 items-center pt-10">
          <LifeCards color='bg-yellow-500' text='Graduates' link='' img="/congratulation.png" />
          <LifeCards color='bg-yellow-500' text='Students' link='' img='/student.png' />
          <LifeCards color='bg-yellow-500' text='Professionals' link='' img='/certificate.png' />
          <LifeCards color='bg-yellow-500' text='Location' link='' img='/guidance.png' />
        </div>
    </div>
  )
}

export default Life