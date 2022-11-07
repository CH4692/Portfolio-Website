import { Button, styled } from "@mui/material"

export const StyledHomeContainerOne = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
}

export const StyledHomeContainerTwo = {
    pt: {xs:'3em', md: '9em'},
    pl: {xs: '0em', md: '3em', lg: '11em'},
    height: '90vh',
}

export const StyledButton = styled(Button)( ({theme}) => ({
    width: '100%',
    height: '50px',
    borderRadius: '5px',
    color: '#fff',
    marginTop: '4rem',
    backgroundColor: theme.palette.primary.main,
    '&:hover': { 
        backgroundColor: theme.palette.primary.dark
  }
}))

export const StyledHomeButtonContainer = {
    mb: '30px',
    mt: '60px',
    width: '100%',
    justifyContent: {xs: 'center', md: 'flex-start'},
    flexDirection: {xs: 'column', md:'row'},

}

export const StyledUpperText = {
    fontSize: { xs: '2em', md: '3rem'}
}

export const StyledLowerText = {
    fontSize: {xs: '2rem', md: '3rem'},
    marginTop: {xs: '0.5rem', md: '0rem'},
    marginBottom: {xs: '4rem', md: '0rem'}
}

