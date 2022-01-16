import React from 'react';
import { Grid } from '@mui/material'
import './Header.css'
import { NavLink } from 'react-router-dom';

const headers = [
  { text: 'Історія кафедри', url: 'history' },
  { text: 'Спеціальності', url: 'speciality' },
  { text: 'Головна', url: 'home' },
  { text: 'Дисципліни', url: 'disciplines' },
  { text: 'Оснащення кафедри', url: 'tools' },
  { text: 'Викладачі', url: 'teachers' }
]

const Header = () => {
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