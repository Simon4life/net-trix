import React from 'react'
import ValuesCards from './sub/ValuesCard'

const Values = () => {
  return (
    <div className=' py-20 px-40'>
        <h1 className="text-center pb-5 text-[40px]">Our Values</h1>
        <div className="flex justify-center gap-10 items-center pt-10">
            <ValuesCards head='Make it happen' text='Our team are committed to doing whatever it takes to ‘make it happen’ by working together and thinking of innovative solutions every step of the way.'/>
            <ValuesCards head='In it together' text='Regardless of their role, each individual at purple has one common goal, turn the world purple. Everyone is available to help each other.' />
            <ValuesCards head='Playful and positive' text='Life’s too short to take things too seriously, we like to have fun while we’re working and we love positivity - and yes the glass is half full.' />
            <ValuesCards head='No drama' text='Things don’t always go to plan as much as we try, having a tantrum over it won’t help the situation and you won’t find that here.' />
        </div>
    </div>
  )
}

export default Values