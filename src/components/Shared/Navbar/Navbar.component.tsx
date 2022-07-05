import React, { useState } from 'react'
import setLanguage from 'next-translate/setLanguage'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Slide from '@mui/material/Slide'
import NextLink from '@/layout/material-ui/link'

import UseStyles from './Navbar.styles'

function Navbar() {
  const [isOnTop, ScrollTrigger] = useState(true)

  React.useEffect(() => {
    window.onscroll = () => ScrollTrigger(window.pageYOffset === 0)
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Slide appear={true} in={!isOnTop}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                fontFamily: 'Ethnocentric',
                fontSize: 42,
              }}
            >
              AIR
            </Typography>
            {/* <Button onClick={async () => await setLanguage('en')}>EN</Button>
          <Button onClick={async () => await setLanguage('es')}>ES</Button>
          <Button onClick={async () => await setLanguage('fr')}>FR</Button>
          <Button onClick={async () => await setLanguage('de')}>DE</Button>
          <Button onClick={async () => await setLanguage('it')}>IT</Button>
          <Button onClick={async () => await setLanguage('se')}>SE</Button>
          <Button onClick={async () => await setLanguage('no')}>NO</Button>
          <Button onClick={async () => await setLanguage('pl')}>PL</Button>
          <Button onClick={async () => await setLanguage('ua')}>UA</Button>
          <Button onClick={async () => await setLanguage('ru')}>RU</Button>
          <Button onClick={async () => await setLanguage('jp')}>JP</Button>
          <Button onClick={async () => await setLanguage('cn')}>CN</Button> */}
            <Typography
              sx={{
                fontSize: 17,
              }}
            >
              <NextLink href={{ pathname: '/about' }} color="inherit">
                Why Air?
              </NextLink>
              <NextLink href={{ pathname: '/about' }} color="inherit">
                Get Started
              </NextLink>
              <NextLink href={{ pathname: '/about' }} color="inherit">
                Docs
              </NextLink>
              <NextLink href={{ pathname: '/about' }} color="inherit">
                Play
              </NextLink>
              <NextLink href={{ pathname: '/about' }} color="inherit">
                Blog
              </NextLink>
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>
    </Box>
  )
}

export default Navbar
