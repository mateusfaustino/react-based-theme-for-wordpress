import border from './borders'
import { palette } from './colors'
const Scroll = `
::-webkit-scrollbar {
    width: 8px;
    border-radius: ${border.border8};
    border: 2px solid ${palette.primary.dark};
}

::-webkit-scrollbar-track {
    background-color: ${palette.primary.light};
    border-radius: ${border.border8};
}

::-webkit-scrollbar-thumb {
    background: ${palette.primary.light}; 
    border-radius: ${border.border8};
    border: 2px solid ${palette.primary.light};
}

::-webkit-scrollbar-thumb:hover {
    background: ${palette.secondary.light}; 
}

@media (min-width:$mobile-breakpoint) {
    ::-webkit-scrollbar {
        width: 10px;
    }
}
`
export default Scroll
