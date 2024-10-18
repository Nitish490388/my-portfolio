import React from 'react'

const SingleSkill = ({title, icon}) => {
  return (
    <div className='px-2 py-2 flex items-center justify-center gap-2 rounded-xl bg-neutral-800 text-orange-800'>
        <span className='text-lg  md:text-xl'>{title}</span>
        <span className='text-xl  md:text-2xl'>{icon}</span>
    </div>
  )
}

export default SingleSkill