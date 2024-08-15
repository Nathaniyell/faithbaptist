import React from 'react'
import AnimatedContainer from '../utils/AnimatedContainer'


interface cardTypeProps{
    icon: React.ReactNode,
    title: string
    description: string
}

const Card = ({title, icon,description}: cardTypeProps) => {
  return (
    <AnimatedContainer className='bg-red-50 text-black flex flex-col gap-6 rounded-md p-5 shadow-sm'>
        <span className='bg-primary self-center hover:bg-white hover:text-primary transition-all ease-linear duration-150 text-white rounded-full h-16 w-16 grid place-items-center'>{icon}</span>
        <h4 className='self-center font-semibold text-lg text-primary rounded-md shadow-sm p-2 bg-white border border-primary'>{title}</h4>
        <p className='text-sm text-primary'>{description}</p>
    </AnimatedContainer>
  )
}

export default Card