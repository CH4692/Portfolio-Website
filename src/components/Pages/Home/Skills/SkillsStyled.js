export const StyledAboutSkills = {
    flexDirection: {xs: 'column', md:'row'},
    justyfyContent: {xs: 'center', md: 'flex-start'},
    width: '100%'
}


export const StyledSkillsAnimator = {
    '&:hover': {transform: { xs: 'translateY(-3px) scale(1.04)', md: ''}, cursor: {xs: 'pointer', md: ''}},
    '&:hover &:active': {transform: { xs: 'translateY(-3px) scale(1.04)', md: ''}},
    width: '100%',
    height: '100%',
    backgroundColor: 'primary.dark',
    borderRadius: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.25s ease-in-out',
    color: '#fff',
}

export const StyledSkilltTextContainer = {
    width: '80px',
    height: '80px',
    textAlign: 'center',
    borderRadius: '100%',
    fontSize: '12px',
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 6px 7px 4px rgba(48, 80, 102, 0.7)'
}

export const StyledIcons = {
    fontSize: '40px',
    postion: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '1s ease-in-out'
}