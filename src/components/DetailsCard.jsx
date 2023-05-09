import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { GiForkKnifeSpoon } from 'react-icons/gi'
export const DetailsCard = ({ state }) => {
    return (
        <article className='relative h-min w-60 p-4 flex flex-col bg-cardcolor rounded-tr-xl rounded-bl-xl rounded-tl-md rounded-br-md shadow-md'>
            <span className='grid h-48 overflow-hidden rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm'>
                {!state.photo ? <p>not availble</p> : <img className='h-full w-full' src={state.photo?.images?.large.url} />}
            </span>
            <span>{state.name}</span>
            <span className='flex gap-1 w-fit px-2 py-1 rounded-full bg-blue-400'>
                <GiForkKnifeSpoon />
                <p className='capitalize text-xs'>{state.ranking_category}</p>
            </span>
            <span className='flex items-center gap-2'>
                {state.rating = "5" &&
                    <span className='flex items-center gap-1 text-yellow-500'>
                        5
                        <AiFillStar className='text-yellow-500' />
                    </span>
                }
                {
                    state.price_level &&
                    <span className='text-xs text-green-600'>
                        {state.price_level}
                    </span>
                }
            </span>

            {/* {name}
            <span>
                {!photo ? <p>no image avail</p> : <img className='h-52' src={photo?.images?.large.url} />}
            </span>
            {location_string} */}
        </article>
    )
}
