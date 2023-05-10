import React, { createContext, useState, useMemo } from 'react'
export const AppContext = createContext({})


export const AppProvider = ({ children }) => {
    const [state, setState] = useState([])
    const [userLocation, setUserLocation] = useState("")
    // const initialValues = { state, setState, userLocation, setUserLocation }
    const contextValue = useMemo(() => ({
        state,
        userLocation,
        setState,
        setUserLocation
    }), [state,
        userLocation, setState, setUserLocation]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
