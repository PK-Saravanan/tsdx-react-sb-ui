
import { createTheme} from '@mui/material/styles';

let customThemeObject = {}

export const customThemeProvider = (inputTheme: any) => {
    customThemeObject =  inputTheme
}

export const getBtnDefaultProps = (defaultProperties  : any = {}) => {

let combinedProps : any = { ...defaultProperties , ...customThemeObject} 

console.log("combinedProps",combinedProps)

    return createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: combinedProps.btnFontSize,
                        color: combinedProps.btnColor,
                        backgroundColor: combinedProps.btnBackgroundColor,
                        fontWeight: combinedProps.btnfontWeight,
                        textTransform : 'none',
                        height : combinedProps.btnHeight,
                        padding : combinedProps.btnPadding,
                        margin : combinedProps.btnMargin,
                        borderRadius : combinedProps.btnBorderRadious,
                        '&:hover' : {
                            backgroundColor: combinedProps.btnHoverBackgroundColor,

                        },
                        '&:disabled' : {
                            backgroundColor: combinedProps.btnDisabledBackgroundColor,
                            color : combinedProps.btnDisabledFontColor

                        },
                        '&:focus' : {
                            backgroundColor: combinedProps.btnFocusBackgroundColor,

                        },
                    },
                },
            },
        },
    });
}
   

