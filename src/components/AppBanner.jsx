import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const AppBanner = () => {
    const { userLocation } = useContext(AppContext)
    return (
        <header className='absolute top-0 w-full bg-transparent text-black'>
            {userLocation ? <p className='text-mono tracking-wider text-sm'>Current city: {userLocation}</p> : <p>Currently no location available</p>}
        </header>
    )
}
