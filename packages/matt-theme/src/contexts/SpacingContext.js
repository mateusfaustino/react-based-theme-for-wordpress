import React, {createContext, useContext, useState} from 'react'
import Spacing from '../components/styleguide/atoms/spacing';
import GridLayout from '../components/styleguide/atoms/grid';
export const SpacingContext = createContext()

export default function  SpacingProvider ({children}) {
    const newSpacing = new Spacing(7,'16px','24px')
    const [spacing,setSpacing] = useState(newSpacing)
    const [maxWidth,setMaxWidth] = useState('700px')
    
    return(
        <SpacingContext.Provider 
            value={{
                spacing,
                setSpacing,
                Grid,
                maxWidth
            }}
        >
            {children}
        </SpacingContext.Provider>
    )
}
export const Grid = ()=>{
    const {spacing} = useSpacing()
    return(
        <GridLayout 
            Margin={spacing.margin} 
            Gap={spacing.gap} 
            Columns={spacing.columns}/>
    )
}
export function useSpacing(){
    const context = useContext(SpacingContext);
    const {spacing, setSpacing, Grid, maxWidth} = context;
    return {spacing, setSpacing, Grid, maxWidth};
}