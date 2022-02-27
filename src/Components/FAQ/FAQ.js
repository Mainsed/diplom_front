import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import './FAQ.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { translateUkr } from '../../constants.ua'
import { translateEng } from '../../constants.eng'
import { useEffect } from 'react';

const FAQ = (props) => {
  useEffect(() => {
    setFaq(props.faqList)
  }, [props.faqList])
  const [faqList, setFaq] = useState([]);
  const phrases = props.language === 1 ? translateUkr : translateEng;

  const faqClickHandle = (e) => {

    const newFaqList = faqList.map((val) => {
      if (val.id === e.currentTarget.name)
        val.dropDown = !val.dropDown;
      return val;
    })
    setFaq(newFaqList)
  }

  return <Paper elevation={10} className='paper'>
    <Typography align='center' variant='h6'>Відповіді на розповсюджені запитання</Typography>
    <Grid container>
      {faqList.map((faq, i) => {
        return <Grid item xs={6} className='faqElement transitionFaqElement' key={faq.question + faq.id}>
          <Grid container justifyContent={'center'} className='transitionFaqElement'>
            <Button className='containerFullHeight transitionFaqElement' onClick={faqClickHandle} name={faq.id}>
              <Paper elevation={15} className='paper containerFullHeight transitionFaqElement'>
                <Grid container justifyContent='space-between' className='transitionFaqElement'>
                  <Typography>
                    {faq.question}
                  </Typography>
                  {faq.dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </Grid>
                {faq.dropDown && (
                  <div>
                    <Divider className='faqElement' />
                    <Typography align='left'>{faq.answear}</Typography>
                  </div>
                )}
              </Paper>
            </Button>
          </Grid>
        </Grid>
      })}
    </Grid>
  </Paper>
}

export default FAQ;