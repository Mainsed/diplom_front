import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import './Employment.css';
import { translateUkr } from '../../constants.ua';
import { translateEng } from '../../constants.eng';
import YouTube from 'react-youtube';

const Entrant = (props) => {
  const phrases = props.language === 1 ? translateUkr : translateEng;

  const partnersInfo = props.partnersEmploymentInfo;
  const employmentMaterials = props.employmentMaterials;

  const YouTubeLists = [
    'PLCyBjMS1_FyDqDAzxwO2f7xcnqGbhT107',
    'PLCyBjMS1_FyCtE6MvJamVijWCwQMd5RIF',
    'PLCyBjMS1_FyCh31XNIFscAluS59kgyQQF'
  ];

  return <Paper elevation={10} className='paper'>
    <Typography variant='h5' align='center'>{phrases['EMPLOYMENT-PARTNERS-TITLE']}</Typography>
    <Grid container className='partMargin'>
      {partnersInfo && partnersInfo.map((partnerInfo, i) => {
        return <Grid item xs={12} md={6} className='employmentElement' key={partnerInfo.name + i}>
          <Typography variant='h5' align='center'>
            <a href={partnerInfo.link} className='link'>{partnerInfo.name}</a>
          </Typography>
          {partnerInfo[`headerText${props.language === 2 ? 'En' : ''}`]
            .map(text => <Typography variant='h6' key={text + i}>{text}</Typography>)}
          {partnerInfo[`mainText${props.language === 2 ? 'En' : ''}`]
            .map(text => <Typography key={text + i}>{text}</Typography>)}
        </Grid>;
      })}
    </Grid>
    <Typography variant='h6' align='center'>{phrases['INTERESTING-INFO-TITLE']}</Typography>
    <Grid container justifyItems={'space-evenly'}>
      {employmentMaterials && employmentMaterials.map((material, i) => {
        return <Grid item xs={3} key={material.info + i}>
          <Button>
            <a href={material.link} className='link'>
              {material[`info${props.language === 2 ? 'En' : ''}`]}
            </a>
          </Button>
        </Grid>;
      })}
    </Grid>
    <Divider />
    <Grid container justifyItems={'space-evenly'}>
      {YouTubeLists.map(list => {
        return <Grid item xs={12} md={6} xl={4} className='employmentYouTube' key={list}>
          <iframe
            id="ytplayer"
            type="text/html"
            height={window.innerWidth > 600 ? '300' : '150'}
            width='100%'
            src={`https://www.youtube.com/embed?v=H-lCBYDxGlM&list=${list}`}
            frameBorder="0" />
        </Grid>;
      })}
    </Grid>
  </Paper>;
};

export default Entrant;