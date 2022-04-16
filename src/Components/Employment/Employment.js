import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import './Employment.css';
import { translateUkr } from '../../constants.ua';
import { translateEng } from '../../constants.eng';

const Entrant = (props) => {
  const phrases = props.language === 1 ? translateUkr : translateEng;

  const partnersInfo = props.partnersEmploymentInfo;
  const employmentMaterials = props.employmentMaterials;

  return <Paper elevation={10} className='paper'>
    <Typography variant='h6' align='center'>{phrases['EMPLOYMENT-PARTNERS-TITLE']}</Typography>
    <Grid container className='partMargin'>
      {partnersInfo && partnersInfo.map((partnerInfo, i) => {
        return <Grid item xs={12} md={6} className='employmentElement' key={partnerInfo.name + i}>
          <Typography variant='h5' align='center'>
            <a href={partnerInfo.link} className='link'>{partnerInfo.name}</a>
          </Typography>
          {partnerInfo[`headerText${props.language === 2 ? 'En' : ''}`].map(text => <Typography variant='h6' key={text + i}>{text}</Typography>)}
          {partnerInfo[`mainText${props.language === 2 ? 'En' : ''}`].map(text => <Typography key={text + i}>{text}</Typography>)}
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
  </Paper>;
};

export default Entrant;