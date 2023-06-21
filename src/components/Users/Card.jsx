import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-2  font-Pacifico bg-[#7b9194] w-96 p-8 rounded-2xl text-white'>
        <img src={props.img ||"default.png"} className='rounded-full' alt={props.name}/>
        <label className='text-lg md:text-2xl'>{props.name}</label>
        <span className='text-lg md:text-2xl'>{props.dob}</span>
      </div>
    </>
  )
}

export default Card
