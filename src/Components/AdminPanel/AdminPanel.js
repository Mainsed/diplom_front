import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Tab, Tabs, Typography, Grid, IconButton, Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField } from '@mui/material';
import React from 'react';
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

  const handleCreateClickOpen = () => {
    setCreateOpen(true);
  };

  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  function CreateDialog(dialogProps) {

    return <Dialog open={createOpen} onClose={handleCreateClose} {...dialogProps}>
      <DialogTitle>Create new {dialogProps.dbname}</DialogTitle>
      <DialogContent>
        {dialogProps.fields.map(field=>{
          return <TextField
          key={field}
          autoFocus
          id={field}
          label={field}
          fullWidth
          variant="standard"
        />;
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreateClose}>Cancel</Button>
        <Button onClick={handleCreateClose}>Subscribe</Button>
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
            <Button onClick={handleCreateClickOpen}>Add new</Button>
          </Grid>
        </AccordionDetails>
        <CreateDialog fields={Object.keys(props[field.fieldName][0])} dbname={field.fieldName} />
      </Accordion>)}
    </TabPanel>)}
  </Paper>;
};

export default AdminPanel;