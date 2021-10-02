import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='mt-4'>
      <div className='flex flex-wrap -mx-6'>{children}</div>
    </div>
  )
}

const CardItem = ({ children }) => {
  return (
    <div className='w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0'>
      <div className='flex items-center px-5 py-6 shadow-sm rounded-md bg-white'>
        {children}
      </div>
    </div>
  )
}

const CardItemData = ({ children }) => {
  return <div className='mx-5'>{children}</div>
}

const CardItemDataValue = ({ children }) => {
  return <h4 className='text-2xl font-semibold text-gray-700'>{children}</h4>
}

const CardItemDataDescription = ({ children }) => {
  return <div className='text-gray-500'>{children}</div>
}

const CardItemIcon = ({ children }) => {
  return (
    <div className='p-3 rounded-full bg-pink-600 bg-opacity-75'>{children}</div>
  )
}

Card.Item = CardItem
CardItem.Icon = CardItemIcon
CardItem.Data = CardItemData
CardItem.Data.Value = CardItemDataValue
CardItem.Data.Description = CardItemDataDescription

export default Card
