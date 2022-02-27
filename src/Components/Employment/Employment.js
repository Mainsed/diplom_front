import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import './Employment.css'
import { translateUkr } from '../../constants.ua'
import { translateEng } from '../../constants.eng'

const Entrant = (props) => {
  const phrases = props.language === 1 ? translateUkr : translateEng;

  const partnersInfo = props.partnersEmploymentInfo;
  const employmentMaterials = props.employmentMaterials

  return <Paper elevation={10} className='paper'>
    <Typography variant='h6' align='center'>Партнери кафедри, які пропонують співпрацю студентам</Typography>
    <Grid container className='partMargin'>
      {partnersInfo && partnersInfo.map((partnerInfo, i) => {
        return <Grid item xs={12} md={6} className='employmentElement' key={partnerInfo.name + i}>
          <Typography variant='h5' align='center'>
            <a href={partnerInfo.link} className='link'>{partnerInfo.name}</a>
          </Typography>
          {partnerInfo.headerText.map(text => <Typography variant='h6' key={text + i}>{text}</Typography>)}
          {partnerInfo.mainText.map(text => <Typography key={text + i}>{text}</Typography>)}
        </Grid>
      })}
    </Grid>
    <Typography variant='h6' align='center'>Цікаві матеріали</Typography>
    <Grid container justifyItems={'space-evenly'}>
      {employmentMaterials && employmentMaterials.map((material, i) => {
        return <Grid item xs={3} key={material.info + i}>
          <Button>
            <a href={material.link} className='link'>
              {material.info}
            </a>
          </Button>
        </Grid>
      })}
    </Grid>
  </Paper>
}

export default Entrant;