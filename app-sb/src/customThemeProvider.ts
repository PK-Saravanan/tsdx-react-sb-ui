
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
                styleOverrides :{
                    root : {
                        textTransform : 'none',
                        fontSize: combinedProps.btnFontSize,
                        fontWeight: combinedProps.btnfontWeight,
                        height : combinedProps.btnHeight,
                        padding : combinedProps.btnPadding,
                        margin : combinedProps.btnMargin,
                        borderRadius : combinedProps.btnBorderRadious,
                    },
                },
                variants: [
                    {
                      props: { variant: 'contained', color: 'primary' },
                      style: {
                        color: combinedProps.btnColor,
                        backgroundColor: combinedProps.btnBackgroundColor,
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
                    {
                        props: { variant: 'outlined', color: 'secondary' },
                        style: {
                        //   backgroundColor: 'grey',
                        },
                      },
                  ],
               
            },
        },
    });
}
   

