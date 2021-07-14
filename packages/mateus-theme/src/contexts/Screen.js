import React, {createContext, useContext, useState,useEffect} from 'react'
import window from 'react'

export const ScreenContext = createContext()

export default function  ScreenProvider ({children}) {
    const [scroll,setScroll] = useState(window.scrollY)
    const [scrollDirection,setScrollDirection] = useState('')
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (scroll > window.scrollY) {
            setScrollDirection('up')
        } else if (scroll < window.scrollY) {
            setScrollDirection('down')
        }
        setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
        
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
          window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
      }, [scroll]);
    return(
        <ScreenContext.Provider 
            value={{
                scroll,
                setScroll,
                scrollDirection,
                setScrollDirection
            }}
        >
            {children}
        </ScreenContext.Provider>
    )
}

export function useScreen(){
    const context = useContext(ScreenContext);
    const {scroll,setScroll,scrollDirection,setScrollDirection} = context;
    return {scroll,setScroll,scrollDirection,setScrollDirection};
}