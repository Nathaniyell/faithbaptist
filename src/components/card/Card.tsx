import React from 'react'


interface cardTypeProps{
    icon: React.ReactNode,
    title: string
    description: string
}

const Card = ({title, icon,description}: cardTypeProps) => {
  return (
    <div className='bg-primary text-white flex flex-col items-center justify-between h-48 rounded-md p-10'>
        <span>{icon}</span>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default Card