
import { createTheme } from "@mui/material";
import { green, grey, orange, red } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary:
        {
            light: '#4dabf5',
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#fff',
        },
        secondary: orange,
        error: red,
        warning: orange,
        info: grey,
        success: green
    },
    typography: {

    }
})

