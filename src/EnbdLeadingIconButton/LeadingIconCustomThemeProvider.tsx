
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
                        '&:hover' : {
                            backgroundColor: combinedProps.btnHover,

                        },
                        height : combinedProps.btnHeight
                    },
                },
                defaultProps: {
                    startIcon: combinedProps.startIcon,
                    disableElevation: combinedProps.disableElevation,
                    disableFocusRipple: combinedProps.disableFocusRipple,
                    disableRipple: combinedProps.disableRipple,
                  },
            },
        },
    });
}
   

