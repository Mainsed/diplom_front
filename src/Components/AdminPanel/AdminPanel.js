import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import './AdminPanel.css'
import { translateUkr } from '../../constants.ua'
import { translateEng } from '../../constants.eng'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  ]

  const getNameField = (fieldName) => {
    let name = ''
    switch (fieldName) {
      case 'programmingLanguages': name = 'name'; break;
      case 'partnersEmploymentInfo': name = 'name'; break;
      case 'employmentMaterials': name = `info${props.language === 2 ? 'En' : ''}`; break;
      case 'faqList': name = `question${props.language === 2 ? 'En' : ''}`; break;
      default: name = `name${props.language === 2 ? 'En' : ''}`
    }
    return name;
  }

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
          {/* add transitions maybe */}
        </AccordionSummary>
        <AccordionDetails>
          {props[field.fieldName].map(detail => <Typography component={'span'} key={Object.values(detail).join('')}>
            {detail[getNameField(field.fieldName)]}
          </Typography>)}
        </AccordionDetails>
      </Accordion>)}
    </TabPanel>)}
  </Paper>
}

export default AdminPanel;