import { Accordion, AccordionDetails, AccordionSummary, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import './FAQ.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { translateUkr } from '../../constants.ua';
import { translateEng } from '../../constants.eng';

const FAQ = (props) => {
  const phrases = props.language === 1 ? translateUkr : translateEng;

  return <Paper elevation={10} className='paper'>
    <Typography align='center' variant='h6'>{phrases['FAQ-TITLE']}</Typography>
    <Grid container>
      {props.faqList.map(faq => {
        return <Grid item xs={6} className='faqElement' key={faq.question + faq.id}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>{faq[`question${props.language === 2 ? 'En' : ''}`]}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq[`answear${props.language === 2 ? 'En' : ''}`]}
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Grid>;
      })}
    </Grid>
  </Paper>;
};

export default FAQ;