import React, { useEffect, useState } from 'react';
import { Button, createTheme, Grid, IconButton, Typography } from '@mui/material';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { translateUkr } from '../../constants.ua';
import { translateEng } from '../../constants.eng';
import Cookies from 'universal-cookie';
import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

const Header = (props) => {
  useEffect(() => {
    const cookies = new Cookies();
    const language = +cookies.get('language');
    language && props.setLanguage(language);

    const header = document.querySelector('.headerMobile');

    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener('scroll', (e) => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        header.classList.remove(scrollUp);
        header.style.position = 'static';
        return;
      }

      header.style.position = 'fixed';

      if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
        // down
        header.classList.remove(scrollUp);
        header.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        header.classList.contains(scrollDown)
      ) {
        // up
        header.classList.remove(scrollDown);
        header.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  const phrases = props.language === 1 ? translateUkr : translateEng;

  const [showBar, setShowBar] = useState(false);

  const headers = [
    { text: phrases['HEADER-FOR-ABITURIENT'], url: 'forentrant' },
    { text: phrases['HEADER-SPECIALITIES'], url: 'speciality' },
    { text: phrases['HEADER-MAIN'], url: 'home' },
    { text: phrases['HEADER-STUDY-ABROAD'], url: 'abroad' },
    { text: phrases['HEADER-WORK'], url: 'employment' },
    { text: phrases['HEADER-FAQ'], url: 'faq' },
  ];

  const theme = createTheme({
    palette: {
      secondary: { main: '#ebd9c8' }
    },
  });

  const handleMenuClick = () => {
    setShowBar(!showBar);
  };

  const SideBar = props => {
    return (
      <div>
        <nav className={''}>
          <Typography align={'right'}>
            <Button className={'classes.Closer'} onClick={handleMenuClick}>
              <ArrowBackIcon color='secondary' />
            </Button>
          </Typography>
          {headers.map(title =>
            <Grid item xs={12} key={title.url}>
              <Grid container justifyItems={'center'} style={{ height: '100%' }}>
                <NavLink to={title.url}
                  className={({ isActive }) =>
                    isActive ? 'nav titleNavActive' : 'nav'
                  }
                >
                  {title.text}
                </NavLink>
              </Grid>
            </Grid>
          )}
        </nav>
      </div>
    )
  }

  return (
    <div>
      <Grid container className='header'>
        {headers.map(title =>
          <Grid item xs={2} key={title.url} className='title'>
            <Grid container justifyItems={'center'} style={{ height: '100%' }}>
              <NavLink to={title.url}
                className={({ isActive }) =>
                  isActive ? 'nav titleNavActive' : 'nav'
                }
              >
                {title.text}
              </NavLink>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid container className='header headerMobile'>
        <ThemeProvider theme={theme}>
          {showBar ?
            <SideBar />
            :
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
              className='menu'
            >
              <MenuIcon />
            </IconButton>
          }
        </ThemeProvider>
      </Grid>
    </div >
  );
};

export default Header;