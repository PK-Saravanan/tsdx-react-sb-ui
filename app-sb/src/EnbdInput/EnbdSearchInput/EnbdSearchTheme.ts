
import { createTheme} from '@mui/material/styles';

let customThemeObject = {}

export const customThemeProvider = (inputTheme: any) => {
    customThemeObject =  inputTheme
}

export const getSearchDefaultProps = (defaultProperties  : any = {}) => {

let combinedProps : any = { ...defaultProperties , ...customThemeObject} 

console.log("combinedProps",combinedProps)

    return createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: combinedProps.srchFontSize,
                        color: combinedProps.srchColor,
                        backgroundColor: combinedProps.srchBackgroundColor,
                        fontWeight: combinedProps.srchfontWeight,
                        textTransform : 'none',
                        height : combinedProps.srchHeight,
                        padding : combinedProps.srchPadding,
                        margin : combinedProps.srchMargin,
                        borderRadius : combinedProps.srchBorderRadious,
                        '&:hover' : {
                            backgroundColor: combinedProps.srchHoverBackgroundColor,

                        },
                        '&:disabled' : {
                            backgroundColor: combinedProps.srchDisabledBackgroundColor,
                            color : combinedProps.srchDisabledFontColor

                        },
                        '&:focus' : {
                            backgroundColor: combinedProps.srchFocusBackgroundColor,

                        },
                    },
                },
            },
        },
    });
}
   

