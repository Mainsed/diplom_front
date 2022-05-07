import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Tab,
  Tabs,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  TextField
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import { translateUkr } from '../../constants.ua';
import { translateEng } from '../../constants.eng';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import env from 'react-dotenv';

const AdminPanel = (props) => {
  useEffect(() => {
    if (props.isAuth)
      props.getAllData(props.setAllData);
  }, [props.isAuth]);

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
  const [updateOpen, setUpdateOpen] = React.useState({ name: false, entity: {} });
  const [deleteOpen, setDeleteOpen] = React.useState({ isOpen: false, id: '' });

  const entitiesSchema = {
    partnersEmploymentInfo: [
      {
        fieldName: 'name',
        type: 'string'
      },
      {
        fieldName: 'link',
        type: 'string'
      },
      {
        fieldName: 'headerText',
        type: 'array'
      },
      {
        fieldName: 'mainText',
        type: 'array'
      },
      {
        fieldName: 'headerTextEn',
        type: 'array'
      },
      {
        fieldName: 'mainTextEn',
        type: 'array'
      },
    ],
    employmentMaterials: [
      {
        fieldName: 'info',
        type: 'string'
      },
      {
        fieldName: 'infoEn',
        type: 'string'
      },
      {
        fieldName: 'link',
        type: 'string'
      },
    ],
    faqList: [
      {
        fieldName: 'question',
        type: 'string'
      },
      {
        fieldName: 'answear',
        type: 'string'
      },
      {
        fieldName: 'questionEn',
        type: 'string'
      },
      {
        fieldName: 'answearEn',
        type: 'string'
      },
    ],
    professionList: [
      {
        fieldName: 'name',
        type: 'string'
      },
      {
        fieldName: 'nameEn',
        type: 'string'
      },
      {
        fieldName: 'requirements',
        type: 'array'
      },
      {
        fieldName: 'requirementsEn',
        type: 'array'
      },
      {
        fieldName: 'link',
        type: 'string'
      },
      {
        fieldName: 'averagePayment',
        type: 'string'
      },
      {
        fieldName: 'maxPayment',
        type: 'string'
      },
      {
        fieldName: 'vacanciesNumber',
        type: 'number'
      },
    ],
    programmingLanguages: [
      {
        fieldName: 'name',
        type: 'string'
      },
      {
        fieldName: 'writeNowPerc',
        type: 'number'
      },
      {
        fieldName: 'changes',
        type: 'number'
      },
      {
        fieldName: 'writeNow',
        type: 'number'
      },
      {
        fieldName: 'useSec',
        type: 'number'
      },
      {
        fieldName: 'usePrim',
        type: 'number'
      },
      {
        fieldName: 'likeIndex',
        type: 'number'
      },
    ],
  };

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
    changes: phrases['DIALOG-CHANGE-FIELD'],
    writeNow: phrases['DIALOG-WRITE-NOW-FIELD'],
    useSec: phrases['DIALOG-USE-SEC-FIELD'],
    usePrim: phrases['DIALOG-USE-PRIM-FIELD'],
    likeIndex: phrases['DIALOG-INDEX-FIELD'],
  };

  const handleCreateClickOpen = (e) => {
    setCreateOpen(e.target.name);
  };

  const handleUpdateClickOpen = (entity) => (e) => {
    setUpdateOpen({ name: e.currentTarget.name, entity });
  };

  const handleDeleteClickOpen = (id, dbname) => () => {
    setDeleteOpen({ openedEntity: dbname, id });
  };

  const handleCreateClose = () => {
    setCreateOpen(null);
  };

  const handleUpdateClose = () => {
    setUpdateOpen({ name: false, entity: {} });
  };

  const handleDeleteClose = () => {
    setDeleteOpen({ openedEntity: '', id: '' });
  };

  const handleCreateSubmit = (entityName, entity, fields) => () => {
    const createdEntity = Object.keys(entity).reduce((acc, cur) => {
      if (fields.find(field => {
        return field.fieldName === cur;
      }).type === 'array')
        acc[cur] = entity[cur].split('\n');
      else acc[cur] = entity[cur];
      return acc;
    }, {});
    props.createNewEntityThunk(createdEntity, entityName);
    setCreateOpen(null);
  };

  const handleDeleteConfirm = (entityName, id) => () => {
    handleDeleteClose();
    props.deleteEntityThunk(id, entityName);
  };

  const handleUpdateSubmit = (entityName, entity, fields, id) => () => {
    const updatedEntity = Object.keys(entity).reduce((acc, cur) => {
      if (fields.find(field => {
        return field.fieldName === cur;
      }).type === 'array')
        acc[cur] = entity[cur].split('\n');
      else acc[cur] = `${entity[cur]}`;
      return acc;
    }, {});
    props.updateEntityThunk(id, updatedEntity, entityName);
    setUpdateOpen({ name: false, entity: {} });
  };

  function CreateDialog(dialogProps) {
    const [form, setForm] = useState(Object.fromEntries(dialogProps.fields.map(field => ([field.fieldName, '']))));
    const handleChange = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
    };
    return <Dialog open={createOpen === dialogProps.dbname} onClose={handleCreateClose} {...dialogProps}>
      <DialogTitle align='center'>{phrases['ADMIN-CREATE-NEW']} {dialogProps.dbname}</DialogTitle>
      <DialogContent className='adminDialogContent'>
        {dialogProps.fields.map((field, i) => {
          return <TextField
            className='adminDialogRow'
            key={field.fieldName}
            autoFocus={i === 0}
            value={form[field.fieldName]}
            id={field.fieldName}
            multiline
            maxRows={20}
            label={fieldNameLabel[field.fieldName]}
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />;
        })}
      </DialogContent>
      <DialogActions align='center'>
        <Grid container justifyContent={'space-evenly'}>
          <Button onClick={handleCreateSubmit(dialogProps.dbname, form, dialogProps.fields)}>{phrases['ADMIN-CREATE-CONFIRM']}</Button>
          <Button onClick={handleCreateClose}>{phrases['ADMIN-CREATE-CANCEL']}</Button>
        </Grid>
      </DialogActions>
    </Dialog>;
  }

  function UpdateDialog(dialogProps) {
    const [form, setForm] = useState(Object.fromEntries(dialogProps.fields.map(field =>
    ([field.fieldName, Array.isArray(updateOpen.entity[field.fieldName]) ?
      updateOpen.entity[field.fieldName].join('\n') :
      updateOpen.entity[field.fieldName]]))));
    const handleChange = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
    };
    return <Dialog open={updateOpen.name === dialogProps.dbname} onClose={handleUpdateClose} {...dialogProps}>
      <DialogTitle align='center'>{phrases['ADMIN-UPDATE']} {dialogProps.dbname}</DialogTitle>
      <DialogContent className='adminDialogContent'>
        {dialogProps.fields.map((field, i) => {
          return <TextField
            className='adminDialogRow'
            key={field.fieldName}
            value={form[field.fieldName]}
            id={field.fieldName}
            multiline
            maxRows={20}
            label={fieldNameLabel[field.fieldName]}
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />;
        })}
      </DialogContent>
      <DialogActions align='center'>
        <Grid container justifyContent={'space-evenly'}>
          <Button onClick={handleUpdateSubmit(
            dialogProps.dbname,
            form,
            dialogProps.fields,
            updateOpen.entity._id,
          )}>{phrases['ADMIN-UPDATE-CONFIRM']}</Button>
          <Button onClick={handleUpdateClose}>{phrases['ADMIN-UPDATE-CANCEL']}</Button>
        </Grid>
      </DialogActions>
    </Dialog>;
  }

  function DeleteDialog(dialogProps) {
    return <Dialog open={deleteOpen.openedEntity === dialogProps.dbname} onClose={handleDeleteClose}>
      <DialogTitle align='center'>{phrases['ADMIN-DELETE-CONFIRM-TITLE']}</DialogTitle>
      <DialogActions align='center'>
        <Grid container justifyContent={'space-evenly'}>
          <Button
            onClick={handleDeleteConfirm(
              dialogProps.dbname,
              deleteOpen.id,
            )}
          >{phrases['ADMIN-DELETE-CONFIRM']}</Button>
          <Button onClick={handleDeleteClose}>{phrases['ADMIN-DELETE-CANCEL']}</Button>
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

  const [error, setError] = useState('');
  const [auth, setAuth] = useState('');

  const handleAuthChange = (event) => {
    setAuth(event.target.value);
  };

  const validateAuth = () => {
    const authFromEnv = env.AUTH;
    return auth === authFromEnv;
  };

  const handleEnterAuthKey = () => {
    const isValidated = validateAuth();
    if (isValidated) {
      props.setAuthSuccess();
      return;
    }
    setError('Incorrect authorization code');
  };

  {
    return props.isAuth ? <Paper elevation={10} className='paper'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
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
              {props[field.fieldName].map(detail =>
                <Grid item xs={12} md={6} lg={4}
                  className='adminElementMarginBottom'
                  key={Object.values(detail).join('')}
                >
                  <Grid container justifyContent={'space-evenly'}>
                    <Grid item xs={12} sm={9}>
                      <Typography component={'span'}>
                        {detail[getNameField(field.fieldName)]}
                      </Typography>
                    </Grid>
                    <div>
                      <IconButton
                        size='small'
                        onClick={handleUpdateClickOpen(detail)}
                        name={field.fieldName}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size='small'
                        onClick={handleDeleteClickOpen(detail._id, field.fieldName)}
                      ><DeleteIcon /></IconButton>
                    </div>
                  </Grid>
                </Grid>)}
              <Grid item xs={12}>
                <Grid container justifyContent={'center'}>
                  <Button onClick={handleCreateClickOpen} name={field.fieldName}>
                    {phrases['ADMIN-CREATE-BUTTON-TEXT']}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
          <CreateDialog fields={entitiesSchema[field.fieldName]} dbname={field.fieldName} />
          <UpdateDialog fields={entitiesSchema[field.fieldName]} dbname={field.fieldName} />
          <DeleteDialog dbname={field.fieldName} />
        </Accordion>)}
      </TabPanel>)}
    </Paper>
      :
      <Paper elevation={10} className='paper'>
        <Typography variant='h4' align='center'>{phrases['ADMIN-AUTH-TITLE']}</Typography>
        <TextField fullWidth onChange={handleAuthChange} />
        <Typography align='center'><Button onClick={handleEnterAuthKey}>{phrases['ADMIN-AUTH-CONFIRM']}</Button></Typography>
        {error !== '' ?
          <Typography color='error' align='center'>
            {error}
          </Typography>
          : ''}
      </Paper>;
  }
};

export default AdminPanel;