
import { createTheme} from '@mui/material/styles';

let customThemeObject = {}

export const customThemeProvider = (inputTheme: any) => {
    customThemeObject =  inputTheme
}

export const getSimpleInputDefaultProps = (defaultProperties  : any = {}) => {

let combinedProps : any = { ...defaultProperties , ...customThemeObject} 

console.log("combinedProps",combinedProps)

    return createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: combinedProps.simplFontSize,
                        color: combinedProps.simplColor,
                        backgroundColor: combinedProps.simplBackgroundColor,
                        fontWeight: combinedProps.simplfontWeight,
                        textTransform : 'none',
                        height : combinedProps.simplHeight,
                        padding : combinedProps.simplPadding,
                        margin : combinedProps.simplMargin,
                        borderRadius : combinedProps.simplBorderRadious,
                        '&:hover' : {
                            backgroundColor: combinedProps.simplHoverBackgroundColor,

                        },
                        '&:disabled' : {
                            backgroundColor: combinedProps.simplDisabledBackgroundColor,
                            color : combinedProps.simplDisabledFontColor

                        },
                        '&:focus' : {
                            backgroundColor: combinedProps.simplFocusBackgroundColor,

                        },
                    },
                },
            },
        },
    });
}
   

