'use client'
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';



type ActiveSectionContextProviderProps = {
    children: ReactNode
}
type ActiveSectionContextType = {
    local: 'en' | 'de' | 'pl'
    setLocal: Dispatch<SetStateAction<'en' | 'de' | 'pl'>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {
    const [local, setLocal] = useState<'en' | 'de' | 'pl'>('en');
    return <ActiveSectionContext.Provider value={{local, setLocal}}>
        {children}
    </ActiveSectionContext.Provider>
};


export const useActiveSectionContext =()=> {
    const context = useContext(ActiveSectionContext)
    if (!context) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }
    return context
}

