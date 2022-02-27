import { Button, Divider, Grid, Paper, Typography, TableContainer, TableRow, TableHead, Table, TableCell, TableBody, TableSortLabel } from '@mui/material';
import React from 'react';
import './Entrant.css'
import { translateUkr } from '../../constants.ua'
import { translateEng } from '../../constants.eng'

const createData = (name, writePercent, change, writeNum, useSecondary, useNow, rate) => {
  return {
    name,
    writePercent,
    change,
    writeNum,
    useSecondary,
    useNow,
    rate,
  };
}

const Entrant = (props) => {
  const phrases = props.language === 1 ? translateUkr : translateEng;

  const rows = [
    createData('JavaScript', '18.8', '+0.17', '1601', '3385', '1089', '49.8'),
    createData('C#', '14.7', '-0.02', '1252', '469', '455', '81.3'),
  ];

  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('name');

  const createSortHandler = (property) => (event) => {
    handleSort(property, event);
  }

  const handleSort = (property, event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  }

  const headCells = [
    {
      id: 'name',
      label: 'Мова програмування',
    },
    {
      id: 'writePercent',
      label: 'Пишуть для роботи зараз, %',
    },
    {
      id: 'change',
      label: 'Зміни',
    },
    {
      id: 'writeNum',
      label: 'Пишуть для роботи зараз',
    },
    {
      id: 'useSecondary',
      label: 'Використовують як додаткові',
    },
    {
      id: 'useNow',
      label: 'Використовують в своїх проектах',
    },
    {
      id: 'rate',
      label: 'Індекс вподобання',
    },
  ];

  const proffesions = phrases['PROFESSION-LIST']
  const exams = phrases['ENTRANT-EXAM-SCHEDULE'].split(',')
  return <Paper elevation={10}>
    <Grid container justifyContent={'space-evenly'}>
      <Grid item xs={12} md={5.99} className='entrantElement'>
        <Grid container direction={'column'} justifyContent='space-evenly' className='containerFullHeight'>
          <Typography align='center' variant='h6'>{phrases['ENTRANT-EXAM-CERTIFICATES']}</Typography>
          <div className='entrantListElement'>
            <Typography>{phrases['ENTRANT-EXAN-MAIN-SUBJECTS']}</Typography>
            <Typography>{phrases['ENTRANT-EXAN-ADITIONAL-SUBJECTS']}</Typography>
          </div>
          <Typography align={'center'}>{phrases['ENTRANT-EXAM-SCHEDULE-TITLE']}</Typography>
          <Grid container className='entrantListElement'>
            {exams.map((exam, index) => {
              return <Grid item xs={12} sm={6} lg={4} key={exam + index}>
                <Typography align={'center'}>
                  {exam}
                </Typography>
              </Grid>
            })}
          </Grid>
          <Typography align='center'>{phrases['ENTRANT-EXAM-EXTRA-SESSION-TITLE']}</Typography>
          <Typography className='entrantListElement'>{phrases['ENTRANT-EXAM-EXTRA-SESSION']}</Typography>
          <Grid container justifyContent={'center'}>
            <Button>
              <a href="https://zno.testportal.com.ua/registration" className='link'>{phrases['EXAM-REGISTER']}</a>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0}><Divider orientation='vertical' /></Grid>
      <Grid item xs={12} md={5.99} className='entrantElement'>
        <Grid container direction={'column'} justifyContent='space-evenly' className='containerFullHeight'>
          <Typography align='center' variant='h6'>{phrases['UNIVERSITY-ENTRY-DOCUMENT-LIST-TITLE']}</Typography>
          {phrases['UNIVERSITY-ENTRY-DOCUMENT-LIST-ARRAY'].map((item) => <Typography className='entrantListElement' key={item}>{item}</Typography>)}
          <Grid container justifyContent={'space-evenly'}>
            <Button className='entrantListElement'>
              <a href="https://pk.zp.edu.ua/pravyla-pryjomu/abituriyentam-pilgovyh-kategorij" className='link'>{phrases['UNIVERSITY-ENTRY-QUESTIONS']}</a>
            </Button>
            <Button className='entrantListElement'>
              <a href="https://pk.zp.edu.ua/" className='link'>{phrases['UNIVERSITY-ENTRY-BENEFITS']}</a>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0} md={12} ><Divider /></Grid>
      <Grid item xs={12}>
        <Typography align='center' variant='h6'>{phrases['PROFESSIONS-LIST-TITLE']}</Typography>
        <Grid container>
          {proffesions.map((prof) => <Grid item xs={12} md={6} className='partMainPadding' key={prof.name}>
            <Grid container className='containerFullHeight' direction={'column'} justifyContent='space-between'>
              <Typography align='center'>
                <a href={prof.link} className='link'>{prof.name}</a>
              </Typography>
              <ul>
                {prof.requirements.map(req => <li key={req}>
                  <Typography>{req}</Typography>
                </li>)}
              </ul>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography>{phrases['AVERAGE-PAYMENT']} {prof.averagePayment}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography>{phrases['MAX-PAYMENT']} {prof.maxPayment}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography>{phrases['VACANCIES-NUMBER']} {prof.vacanciesNumber}</Typography>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          </Grid>)}
        </Grid>
      </Grid>
      <Typography className='entrantElement'>Список мов програмування та їх популярність</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map(cell => <TableCell align='center' {...cell} key={cell.id}>
                <TableSortLabel
                  active={orderBy === cell.id}
                  direction={orderBy === cell.id ? order : 'asc'}
                  onClick={createSortHandler(cell.id)}
                >
                  {cell.label}
                </TableSortLabel>
              </TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.sort((a, b) => {
              return orderBy === 'name' ?
                +(a[orderBy] < b[orderBy]) * (order === 'asc' ? -1 : 1) :
                (b[orderBy] - a[orderBy]) * (order === 'asc' ? -1 : 1)
            }).map((row) => (
              <TableRow
                key={row.name}
              >
                {Object.entries(row).map(entry => {
                  return <TableCell align='center' key={entry}>{entry[1] + (entry[0] === 'rate' ? '%' : '')}</TableCell>
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Paper>
}

export default Entrant;