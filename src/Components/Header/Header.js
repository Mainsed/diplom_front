import React, { useEffect } from 'react';
import { Grid } from '@mui/material'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { translateUkr } from '../../constants.ua'
import Cookies from 'universal-cookie';

const Header = (props) => {
  useEffect(()=>{
    const cookies = new Cookies();
    const language = +cookies.get('language');
    language && props.setLanguage(language);
  })

  const phrases = props.language === 1 ? translateUkr : translateUkr;

  const headers = [
    { text: phrases['HEADER-FOR-ABITURIENT'], url: 'forentrant' },
    { text: phrases['HEADER-SPECIALITIES'], url: 'speciality' },
    { text: phrases['HEADER-MAIN'], url: 'home' },
    { text: phrases['HEADER-DISCIPLINES'], url: 'disciplines' },
    { text: phrases['HEADER-TEACHERS'], url: 'teachers' },
    { text: phrases['HEADER-FAQ'], url: 'faq' },
  ]
  return (
    <div>
      <Grid container className='mainContainer'>
        {headers.map(title =>
          <Grid item xs={2} key={title.url} className='title'>
            <Grid container justifyItems={'center'} style={{height: '100%'}}>
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
    </div>
  )
}

export default Header;