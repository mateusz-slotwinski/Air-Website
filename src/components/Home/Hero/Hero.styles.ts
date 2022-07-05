import { makeStyles } from '@mui/styles'
import Panda from '@/assets/home/panda.jpg'

const useStyles = makeStyles(() => ({
  section: {
    position: 'relative',
    backgroundImage: `url(${Panda.src})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#090909',
    backgroundAttachment: 'fixed',
    color: '#fff',
    height: 700,
    maxHeight: '100vh',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'brightness(0.7)',
    padding: 20,
  },
  logo: {
    flexGrow: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: 1200,
  },
  topWrapper: {
    paddingTop: 10,
    '@media (max-width: 850px)': {
      display: 'none',
    },
  },
  topWrapperItem: {
    paddingRight: 15,
  },
  link: {
    fontSize: 19,
    textTransform: 'uppercase',
    transition: '0.2s all',
    fontWeight: 500,
    '&:hover': {
      color: '#00afdb',
    },
  },
  mainWrapper: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e3e3e3',
  },
  title: {
    fontFamily: 'Ethnocentric',
    lineHeight: '90px',
    fontSize: 120,
    '@media (max-width: 960px)': {
      fontSize: 90,
      lineHeight: '60px',
    },
  },
  slogan: {
    fontSize: 24,
    lineHeight: '24px',
    maxWidth: 700,
    padding: '20px 0',
    '@media (max-width: 960px)': {
      fontSize: 18,
      lineHeight: '18px',
    },
  },
}))

export default useStyles
