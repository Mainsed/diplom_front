import { Grid, Typography, Paper, Divider } from '@mui/material';
import React from 'react'
import { ReactComponent as Logo } from '../../img/logo.svg'
import './MainPage.css'
import { translateUkr } from '../../constants.ua'

const MainPage = (props) => {
  const phrases = props.language === 1 ? translateUkr : translateUkr;
  return <Paper elevation={10} className='paper'>
    <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
      <Logo className='logo' />

      <Grid item xs={7}>
        <Grid container alignItems={'center'} direction={'column'}>
          <Typography>{phrases['ACTIVITY-START-YEAR']}: 2002</Typography>
          <Typography>{phrases.ADMINISTRATION}</Typography>
          <Typography>{phrases['ADMINISTRATION-OF-KAFEDRA']}
            <a href="https://zp.edu.ua/?q=node/664" className='link'>д.т.н., професор Субботiн Сергiй Олександрович</a>
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider className='divider'></Divider>
      </Grid>
      <Grid container justifyContent={'space-evenly'} justifyItems={'flex-start'} className='additionalContent'>
        <Grid item xs={12} className='partMargin'>
          <Typography>{phrases['DESCRIPTION-1']}</Typography>
          <br />
          <Typography>{phrases['DESCRIPTION-2']}</Typography>
          <br />
          <Typography>{phrases['DESCRIPTION-3']}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' className='titleTag'>{phrases.SPECIALITYS}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Grid container className='containerFullHeight' direction={'column'} justifyContent='space-between'>
            <Grid item>
              <Typography align='center'>{phrases['SPECIALITY-1']}:</Typography>
              <Typography align='center' className='studyProgram'>{phrases['SPECIALITY-1-STUDYPROGRAM']}</Typography>
            </Grid>
            <Typography className='partMargin'>{phrases['SPECIALITY-1-DESCRIPTION']}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation='vertical' />
        </Grid>
        <Grid item xs={5}>
          <Grid container className='containerFullHeight' direction={'column'} justifyContent='space-between'>
            <Grid item>
              <Typography align='center'>{phrases['SPECIALITY-2']}:</Typography>
              <Typography align='center' className='studyProgram'>{phrases['SPECIALITY-2-STUDYPROGRAM-1']}</Typography>
              <Typography align='center' className='studyProgram'>{phrases['SPECIALITY-2-STUDYPROGRAM-2']}</Typography>
            </Grid>
            <Typography className='partMargin'>{phrases['SPECIALITY-2-DESCRIPTION']}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center'>{phrases['STUDY-PRICE-TITLE']}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography align='center' className='partMargin'>{phrases['STUDY-PRICE-1']}</Typography>
        </Grid>
        <Grid item>
          <Divider orientation='vertical' />
        </Grid>
        <Grid item xs={5}>
          <Typography align='center' className='partMargin'>{phrases['STUDY-PRICE-2']}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center'>{phrases['FREE-PLACES-TITLE']}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography align='center' className='partMargin'>{phrases['FREE-PLACES-1']}</Typography>
        </Grid>
        <Grid item>
          <Divider orientation='vertical' />
        </Grid>
        <Grid item xs={5}>
          <Typography align='center' className='partMargin'>{phrases['FREE-PLACES-2']}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center'>{phrases['PARTNERS-TITLE']}</Typography>
          <Typography className='partMargin'>{phrases['PARTNERS']}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
}

export default MainPage;
