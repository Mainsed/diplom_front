import { Grid, Typography, Paper } from '@mui/material';
import React from 'react'
import { ReactComponent as Logo } from '../../img/logo.svg'
import './MainPage.css'
import { translateUkr } from '../../constants.ua'

const MainPage = () => {
  const phrases = translateUkr;
  
  return <Paper variant="outlined" className='paper'>
    <Grid container justifyContent={'space-evenly'} className='wrap' alignItems={'center'}>
      
      <Logo className='logo' />

      <Grid item xs={7}>
        <Grid container alignItems={'center'} direction={'column'}>
          <Typography>{phrases['ACTIVITY-START-YEAR']}: 2002</Typography>
          <Typography>{phrases.ADMINISTRATION}</Typography>
          <Typography>{phrases['ADMINISTRATION-OF-KAFEDRA']}
            <a href="https://zp.edu.ua/?q=node/664" className='link'>Субботiн Сергiй Олександрович</a>
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={5}>
        <Typography align='center' className='titleTag'>{phrases['LABORATORIES-TO-STUDY']}:</Typography>
        <Typography>{phrases['LABORATORY-1']}</Typography>
        <Typography>{phrases['LABORATORY-2']}</Typography>
        <Typography>{phrases['LABORATORY-3']}</Typography>
      </Grid>
      
      <Grid item xs={5}>
        <Typography align='center' className='titleTag'>{phrases.SPECIALITYS}:</Typography>
        <Typography>{phrases['SPECIALITY-1']}:</Typography>
        <Typography className='studyProgram'>{translateUkr['SPECIALITY-1-STUDYPROGRAM']}</Typography>
        <Typography>{phrases['SPECphrasesIALITY-2']}:</Typography>
        <Typography className='studyProgram'>{phrases['SPECIALITY-2-STUDYPROGRAM-1']}</Typography>
        <Typography className='studyProgram'>{phrases['SPECIALITY-2-STUDYPROGRAM-2']}</Typography>
      </Grid>

    </Grid>
  </Paper>
}

export default MainPage;
