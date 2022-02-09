import { Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Entrant.css'

export default function Entrant() {
  const exams = [
    'Фізика 23 травня (понеділок)',
    'Хімія 26 травня (четвер)',
    'Українська мова 31 травня (вівторок)',
    'Українська мова та література 31 травня (вівторок)',
    'Математика 03 червня (п’ятниця)',
    'Іспанська мова 06 червня (понеділок)',
    'Німецька мова 06 червня (понеділок)',
    'Французька мова 06 червня (понеділок)',
    'Англійська мова 07 червня (вівторок)',
    'Історія України 10 червня (п’ятниця)',
    'Географія 14 червня (вівторок)',
    'Біологія 17 червня (п’ятниця)'
  ]
  return <Paper elevation={10} className='paper'>
    <Grid container >
      <Grid item xs={12} md={6}>
        <Typography align='center'>Сертифікати ЗНО для вступу бакалаврам</Typography>
        <div className='partMargin'>
          <Typography> Основні предмети: Українська мова, Математика</Typography>
          <Typography> Предмети на вибір: Історія України | іноземна мова | біологія | географія | фізика | хімія</Typography>
        </div>
        <Typography align={'center'}>Графік проведення ЗНО</Typography>
        <Grid container className='partMargin'>
          {exams.map(exam => {
            return <Grid item xs={12} sm={6} lg={4} className='entrantExamList'>
              <Typography align={'center'}>
                {exam}
              </Typography>
            </Grid>
          })}
        </Grid>
        <Typography align='center'>Додаткова сессія</Typography>
        <Typography className='partMargin'>Додаткова сесія ЗНО для учасників, які не змогли взяти участь у основній сесії тестування з поважних причин, пройде у період з 23 червня до 15 липня 2022 року.</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>---------------------------------</Typography>
      </Grid>
    </Grid>
  </Paper>

}