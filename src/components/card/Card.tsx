import React from 'react'
import AnimatedContainer from '../utils/AnimatedContainer'


interface cardTypeProps{
    icon: React.ReactNode,
    title: string
    description: string
}

const Card = ({title, icon,description}: cardTypeProps) => {
  return (
    <AnimatedContainer className='bg-red-50 cursor-pointer hover:bg-red-200 transition-all ease-in-out duration-150 group flex flex-col gap-6 rounded-md p-5 shadow-sm'>
        <span className='bg-primary2 self-center group-hover:border-primary group-hover:border group-hover:bg-white group-hover:text-primary2 transition-all ease-linear duration-150 text-white rounded-full h-16 w-16 grid place-items-center'>{icon}</span>
        <h4 className='self-center font-semibold text-lg text-primary2 rounded-md shadow-sm p-2 bg-white border border-primary'>{title}</h4>
        <p className='text-sm text-primary'>{description}</p>
    </AnimatedContainer>
  )
}

export default Card