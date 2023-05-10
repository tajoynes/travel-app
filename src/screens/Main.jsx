import React, { useContext, useEffect } from 'react'
import { getData } from '../api/index'
import { DetailsCard } from '../components/DetailsCard'
import { SectionTitle } from '../components/SectionTitle'
import { AppContext } from '../context/AppContext'
import { AppLayout } from '../layout/AppLayout'


export const Main = () => {
    const { userLocation, state, setState, setUserLocation } = useContext(AppContext)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            fetch(geoApiUrl)
                .then(response => response.json())
                .then((data) => setUserLocation(data.city))
        })
    }, [setUserLocation])

    useEffect(() => {
        if (userLocation) {
            getData()
                .then(response => response.data)
                .then(({ data }) => setState(data))
        }
    }, [userLocation])

    return (
        <AppLayout>
            {/* dynamic based on users location */}
            <SectionTitle label={userLocation ? userLocation : "no location provided"} styles="text-2xl tracking-wider font-mono" />
            <div className='bg-slate-600/40 rounded-2xl w-full py-1 px-8 grid grid-flow-col gap-6 overflow-x-auto overscroll-x-contain'>
                {state && state.filter((state) => state.rating === "5.0").slice(0, 10).map((state) => (
                    <DetailsCard key={state.name} state={state} />
                ))}
            </div>
        </AppLayout>
        // <section className='relative max-h-screen max-w-full grid grid-rows-6 p-8 bg-red-500 overflow-hidden'>
        //     <div className='row-span-3 w-full bg-hero-banner bg-cover bg-no-repeat bg-center'>
        //         Banner 1/2
        //     </div>
        //     <div className='row-span-4 w-full bg-green-400 grid grid-rows-5 py-4 px-5 overflow-x-auto overscroll-x-contain'>
        //         <SectionTitle label="featured spots" styles='font-mono text-xl capitalize col-span-full' />
        //         <div className='row-span-4 grid grid-flow-col gap-3'>
        //             {
        //                 state && state.slice(0, 10).map((state) => (
        //                     <DetailsCard key={state.location_id} state={state} />
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </section>
    )
}
