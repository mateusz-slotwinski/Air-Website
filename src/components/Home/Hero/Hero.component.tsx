import React from 'react'
import NonStyledLink from 'next/link'
import NextLink from '@/layout/material-ui/link'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import UseStyles from './Hero.styles'
import { Pages } from '@/components/Shared/Navbar/Navbar.data'

const Navbar: React.FC = () => {
  const styles = UseStyles()
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Grid
            container
            className={styles.topWrapper}
            alignItems="center"
            columnSpacing={{ xs: 0 }}
          >
            <div className={styles.logo}>
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
                <NextLink href="/" color="inherit" underline="none">
                  AIR
                </NextLink>
              </Typography>
            </div>
            {Pages.map((page) => (
              <Grid
                item
                columnSpacing="30"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={styles.topWrapperItem}
                key={page.text}
              >
                <NextLink
                  color="inherit"
                  underline="none"
                  href={`/${page.link}`}
                >
                  <Typography className={styles.link}>{page.text}</Typography>
                </NextLink>
              </Grid>
            ))}
          </Grid>
          <div className={styles.mainWrapper}>
            <div>
              <div className={styles.title}>AIR</div>
              <div className={styles.slogan}>
                Easy, efficient and incredibly enjoyable open-source programming
                language. See for yourself how easy it is!
              </div>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <NonStyledLink href="/start" passHref>
                  <Button variant="contained" size="large">
                    Get Started
                  </Button>
                </NonStyledLink>
                <NonStyledLink href="/docs" passHref>
                  <Button variant="outlined" color="inherit" size="large">
                    Documentation
                  </Button>
                </NonStyledLink>
                <NonStyledLink href="/download" passHref>
                  <Button variant="outlined" color="inherit" size="large">
                    Download
                  </Button>
                </NonStyledLink>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
