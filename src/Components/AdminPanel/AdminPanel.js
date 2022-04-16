import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Tab, Tabs, Typography, Grid, IconButton, Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './AdminPanel.css';
import { translateUkr } from '../../constants.ua';
import { translateEng } from '../../constants.eng';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminPanel = (props) => {
  const phrases = props.language === 1 ? translateUkr : translateEng;

  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <div>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const [createOpen, setCreateOpen] = React.useState(false);

  const fieldNameLabel = {
    name: phrases['DIALOG-NAME-FIELD'],
    link: phrases['DIALOG-LINK-FIELD'],
    headerText: phrases['DIALOG-HEADER-TEXT-FIELD'],
    mainText: phrases['DIALOG-MAIN-TEXT-FIELD'],
    info: phrases['DIALOG-INFO-FIELD'],
    infoEn: phrases['DIALOG-INFO-EN-FIELD'],
    question: phrases['DIALOG-QUESTION-FIELD'],
    answear: phrases['DIALOG-ANSWEAR-FIELD'],
    questionEn: phrases['DIALOG-QUESTION-EN-FIELD'],
    answearEn: phrases['DIALOG-ANSWEAR-EN-FIELD'],
    nameEn: phrases['DIALOG-NAME-EN-FIELD'],
    requirements: phrases['DIALOG-REQUIREMENTS-FIELD'],
    requirementsEn: phrases['DIALOG-REQUIREMENTS-EN-FIELD'],
    averagePayment: phrases['DIALOG-AVERAGE-PAYMENT-FIELD'],
    maxPayment: phrases['DIALOG-MAX-PAYMENT-FIELD'],
    vacanciesNumber: phrases['DIALOG-VACANCIES-NUMBER-FIELD'],
    writeNowPerc: phrases['DIALOG-WRTITE-NOW-PERC-FIELD'],
    change: phrases['DIALOG-CHANGE-FIELD'],
    writeNow: phrases['DIALOG-WRITE-NOW-FIELD'],
    useSec: phrases['DIALOG-USE-SEC-FIELD'],
    usePrim: phrases['DIALOG-USE-PRIM-FIELD'],
    index: phrases['DIALOG-INDEX-FIELD'],
  };

  const handleCreateClickOpen = (e) => {
    setCreateOpen(e.target.name);
  };

  const handleCreateClose = () => {
    setCreateOpen(null);
  };

  function CreateDialog(dialogProps) {
    const [form, setForm] = useState(Object.fromEntries(dialogProps.fields.map(field=>([field, '']))));

    const handleChange = (e) => {
      setForm({...form, [e.target.id]: e.target.value});
    }
    return <Dialog open={createOpen === dialogProps.dbname} onClose={handleCreateClose} {...dialogProps}>
      <DialogTitle align='center'>Create new {dialogProps.dbname}</DialogTitle>
      <DialogContent className='adminDialogContent'>
        {dialogProps.fields.map((field, i) => {
          return <TextField
            className='adminDialogRow'
            key={field}
            autoFocus={i === 0}
            value={form[field]}
            id={field}
            label={fieldNameLabel[field]}
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />;
        })}
      </DialogContent>
      <DialogActions align='center'>
        <Grid container justifyContent={'space-evenly'}>
          <Button onClick={handleCreateClose}>Subscribe</Button>
          <Button onClick={handleCreateClose}>Cancel</Button>
        </Grid>
      </DialogActions>
    </Dialog>;
  }

  const [value, setValue] = React.useState(0);

  const tabs = [
    {
      name: phrases['HEADER-FOR-ABITURIENT'],
      changeableFields: [
        {
          name: phrases['PROFESSIONS-LIST-TITLE'],
          fieldName: 'professionList'
        },
        {
          name: phrases['TABLE-ENTRANT-TITLE'],
          fieldName: 'programmingLanguages'
        }
      ]
    },
    {
      name: phrases['HEADER-WORK'],
      changeableFields: [
        {
          name: phrases['EMPLOYMENT-PARTNERS-TITLE'],
          fieldName: 'partnersEmploymentInfo'
        },
        {
          name: phrases['INTERESTING-INFO-TITLE'],
          fieldName: 'employmentMaterials'
        }
      ]
    },
    {
      name: phrases['HEADER-FAQ'],
      changeableFields: [
        {
          name: phrases['FAQ-TITLE'],
          fieldName: 'faqList'
        },

      ]
    }
  ];

  const getNameField = (fieldName) => {
    let name = '';
    switch (fieldName) {
      case 'programmingLanguages': name = 'name'; break;
      case 'partnersEmploymentInfo': name = 'name'; break;
      case 'employmentMaterials': name = `info${props.language === 2 ? 'En' : ''}`; break;
      case 'faqList': name = `question${props.language === 2 ? 'En' : ''}`; break;
      default: name = `name${props.language === 2 ? 'En' : ''}`;
    }
    return name;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <Paper elevation={10} className='paper'>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map(tab => <Tab label={tab.name} key={tab.name} />)}
      </Tabs>
    </Box>
    {tabs.map((tab, i) => <TabPanel value={value} index={i} key={tab.name + i}>
      {tab.changeableFields.map(field => <Accordion key={field.fieldName + i}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography component={'span'}>{field.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent={'space-evenly'}>
            {props[field.fieldName].map(detail => <Grid item xs={12} md={6} lg={4} className='adminElementMarginBottom' key={Object.values(detail).join('')}>
              <Grid container justifyContent={'space-between'}>
                <Typography component={'span'}>
                  {detail[getNameField(field.fieldName)]}
                </Typography>
                <div>
                  <IconButton size='small'><EditIcon /></IconButton>
                  <IconButton size='small'><DeleteIcon /></IconButton>
                </div>
              </Grid>
            </Grid>)}
            <Grid item xs={12}>
              <Grid container justifyContent={'center'}>
                <Button onClick={handleCreateClickOpen} name={field.fieldName}>Add new</Button>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
        <CreateDialog fields={Object.keys(props[field.fieldName][0])} dbname={field.fieldName} />
      </Accordion>)}
    </TabPanel>)}
  </Paper>;
};

export default AdminPanel;