import React, { useEffect, useState } from 'react';
import { createTheme, FormControl, Grid, InputLabel, MenuItem, Select, Typography, ThemeProvider, Divider, TextField } from '@mui/material'
import { grey } from '@mui/material/colors';
import './Footer.css'
import '../../App.css'
import { translateUkr } from '../../constants.ua'
import { makeStyles } from '@mui/styles';

import Cookies from 'universal-cookie';

const theme = createTheme({
  palette: {
    error: { main: '#ebd9c8' },
    secondary: { main: '#ebd9c8' }
  },
})

const useStyles = makeStyles({
  divider: {
    backgroundColor: '#ebd9c8',
  },
  label: {
    color: "#ebd9c8",
    "&.Mui-focused": {
      color: "#ebd9c8",
    },
  },
  select: {
    color: "#ebd9c8",
    "& .MuiSvgIcon-root": {
      color: "#ebd9c8",
    },
  },
});

const Footer = (props) => {
  useEffect(()=>{
    setLanguage(props.language);
  },);

  const classes = useStyles();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
    props.setLanguage(event.target.value);

    const cookies = new Cookies();
    cookies.set('language', event.target.value, { path: '/' });
  }

  const [language, setLanguage] = useState(1)

  const phrases = props.language === 1 ? translateUkr : translateUkr;

  return (
    <div>
      <Grid container justifyContent={'space-evenly'} className='mainFooterContainer'>
        <Grid item xs={4}>
          <Grid container justifyContent={'center'} className='containerFullHeight' direction={'column'}>
            <Typography textAlign={'center'}>{phrases['FOOTER-ADRESS-TITLE']}</Typography>
            <Typography textAlign={'center'}>{phrases['FOOTER-ADRESS']}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation='vertical' className={classes.divider} />
        </Grid>
        <Grid item xs={4}>
          <Grid container justifyContent={'center'} className='containerFullHeight' direction={'column'}>
            <Typography textAlign={'center'}>{phrases['FOOTER-EMAIL-TITLE']} {phrases['FOOTER-EMAIL']}</Typography>
            <Typography textAlign={'center'}>{phrases['FOOTER-PHONE-TITLE']} {phrases['FOOTER-PHONE']}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation='vertical' className={classes.divider} />
        </Grid>
        <Grid item xs={3}>
          <Grid container justifyContent={'center'} className='containerFullHeight' direction={'column'}>
            <Typography textAlign={'center'}>{phrases['FOOTER-LANGUAGE-CHANGE']}</Typography>
            <ThemeProvider theme={theme}>
              <FormControl>
                <InputLabel color={'secondary'} id="language-label" className={classes.label}>
                  {phrases['FOOTER-LANGUAGE-TITLE']}
                </InputLabel>
                <Select
                  color='secondary'
                  labelId="language-label"
                  label={phrases['FOOTER-LANGUAGE-TITLE']}
                  value={language}
                  error
                  className={classes.select}
                  onChange={handleLanguageChange}
                >
                  <MenuItem value={1}>Українська</MenuItem>
                  <MenuItem value={2}>English</MenuItem>
                </Select>
              </FormControl>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;