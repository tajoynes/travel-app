import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'

export const AppLayout = ({ children }) => {
    return (
        <div className='grid grid-flow-row min-h-screen relative overflow-hidden rounded-2xl p-8'>
            <div className='row-auto flex flex-col bg-map-background bg-cover bg-center bg-no-repeat bg-fixed rounded-2xl'>
                <SectionTitle label="discover places near you" styles='text-5xl text-gray-800 font-mono tracking-wide self-center mt-20 capitalize' />
                <div className='mx-52 mt-10 relative py-4'>
                    <FaMapMarkerAlt className='absolute top-6 left-2 text-2xl text-slate-500' />
                    <input placeholder='search' className='w-full rounded-2xl py-2 ps-8 focus:outline-none bg-slate-50 bg-opacity-60 border border-slate-500 text-black placeholder:text-black' />
                </div>
                <div className='mt-24 py-2 px-2 grid grid-flow-rows overflow-hidden overflow-x-auto overscroll-x-contain'>
                    {children}
                </div>
            </div>
        </div>
    )
}
