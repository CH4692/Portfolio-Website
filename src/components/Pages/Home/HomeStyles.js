import { Button, styled } from "@mui/material"

export const StyledHomeContainerOne = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
}

export const StyledHomeContainerTwo = {
    pt: {xs:'1em', md: '11em'},
    pl: {xs: '1em', md: '8em'},
    height: '80vh'
}

export const StyledButton = styled(Button)({
    width: '300px',
    height: '50px',
    borderRadius: '5px',
    color: 'primary.dark'
  })

export const StyledHomeButtonContainer = {
    mb: '30px',
    mt: '60px',
    width: '100%',
    justifyContent: {xs: 'center', md: 'flex-start'}
}

export const StyledUpperText = {
    fontSize: { xs: '2em', md: '3rem'}
}

export const StyledLowerText = {
    fontSize: {xs: '2rem', md: '3rem'},
    marginTop: {xs: '0.5rem', md: '0rem'},
    marginButton: {xs: '3rem', md: '0rem'}
}
