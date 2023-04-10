import React from 'react'

export const CampaignGrid = ({children}) => {
  return (
    <div className='grid grid-cols-4 gap-x-5'>{children}</div>
  )
}
