const initialState = {
  language: 1,
  partnersEmploymentInfo: [
    {
      name: 'Extrums',
      link: 'https://extrums.com/',
      headerText: ['Ищешь место, где получить практический опыт в направлении Front-end (React.js) или Back-end (Node.js) с персональным ментором, стипендией и возможностью получить оффер по окончании стажировки?'],
      mainText: ['Тогда компания Extrums (https://jobs.dou.ua/companies/extrums/) приглашает тебя на 3-х месячную оплачиваемую стажировку. Мы предлагаем тебе все то, что перечислено ниже и даже больше — работу над реальными кейсами.',
        'Вот что мы предлагаем нашим будущим сотрудникам 😏',
        '▪️гибкий график работы, оплачиваемый отпуск и больничный, выходные на все государственные праздники;',
        '▪️возможность работать удаленно;',
        '▪️регулярные корпоративы;',
        '▪️компенсация за обучающие курсы, английский язык, занятия спортом;',
        '▪️комфортные условия работы — офис со всеми удобствами  в самом центре города на проспекте Маяковского;',
        '▪️денежные бонусы за присоединение к компании;',
        '▪️оплачиваемые программы стажировок.'
      ],
      headerTextEn: ['Are you looking for a place to gain practical experience in Front-end (React.js) or Back-end (Node.js) with a personal mentor, scholarship and the opportunity to receive an offer at the end of the internship?'],
      mainTextEn: ['Then Extrums (https://jobs.dou.ua/companies/extrums/) invites you to a 3-month paid internship. We offer you all that is listed below and even more - work on real cases. ',
        'Here\'s what we offer our future employees 😏',
        '▪flexible work schedule, paid leave and sick leave, weekends on all public holidays;',
        '▪ability to work remotely;',
        '▪regular corporations;',
        '▪compensation for training courses, English language, sports;',
        '▪comfortable working conditions - office with all amenities in the heart of the city on Mayakovsky Avenue;',
        '▪money bonuses for joining the company;',
        '▪paid internship programs.']

    },
    {
      name: 'Computools',
      link: 'https://computools.com/',
      headerText: [''],
      mainText: ['Компания Computools предлагает студентам широкие возможности развития:',
        '▪️Стажировка.',
        '▪️Пассивная стажировка.',
        '▪️Практика.',
        '▪️Обучение английским с техническим обучением.',
        'Прилагаем документ, в котором вы детальнее сможете ознакомиться со всеми видами сотрудничества.',
        'Просим заполнить небольшую анкету, чтобы команда Computools могла с вами связаться и предложить вам наиболее подходящий вариант!',
        'https://docs.google.com/forms/d/e/1FAIpQLSeOGutSFnuatzJ9-GZpvlyDEKrV057t2i4q8uF4W2dMTOx-yw/viewform'],
      headerTextEn: [''],
      mainTextEn: ['Computools offers students a wide range of development opportunities:',
        '▪Internship.',
        '▪Passive internship.',
        '▪Practice.',
        '▪Englishing with technical training.',
        'We enclose a document in which you will be able to get acquainted in more detail with all types of cooperation.',
        'Please fill out a small form so that the Computools team can contact you and offer you the best option!',
        'https://docs.google.com/forms/d/e/1FAIpQLSeOGutSFnuatzJ9-GZpvlyDEKrV057t2i4q8uF4W2dMTOx-yw/viewform']
    }
  ],
  employmentMaterials: [
    {
      info: 'Зустріч з представниками фірм Computools, Extrums, GroupBWT, Natife',
      infoEn: 'Meeting with representatives of Computools, Extrums, GroupBWT, Natife',
      link: 'https://youtu.be/LVw3gPTrmLA'
    }
  ],
  faqList: [
    {
      id: '1',
      question: 'Запитання1',
      answear: 'Відповідь1',
      questionEn: 'question test1',
      answearEn: 'answear test1',
    },
    {
      id: '2',
      question: 'Запитання2',
      answear: 'Відповідь2',
      questionEn: 'question test2',
      answearEn: 'answear test2'
    },
    {
      id: '3',
      question: 'Запитання3',
      answear: 'Відповідь3',
      questionEn: 'question test3',
      answearEn: 'answear test3'
    },
    {
      id: '4',
      question: 'Запитання4',
      answear: 'Відповідь4',
      questionEn: 'question test4',
      answearEn: 'answear test4'
    },
  ],
  professionList: [
    {
      name: 'Програміст-розробник',
      nameEn: 'Developer',
      requirements: [
        'Знання необхідних технологій та мов програмування, залежно від вакансії',
        'Уміння писати та правильно читати технічне завдання (ТЗ)',
        'Знання англійської мови на технічному рівні',
        'Soft skills: постійний саморозвиток, аналітичний склад розуму, відповідальність, комунікабельність, робота в команді.'
      ],
      requirementsEn: [
        'Knowledge of required technologies and programming languages, depending on the vacancy',
        'Ability to write and correctly read the technical task (TOR)',
        'Knowledge of English at the technical level',
        'Soft skills: constant self-development, analytical mind, responsibility, sociability, teamwork.'
      ],
      link: 'https://www.work.ua/jobs-%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA/',
      averagePayment: '2500$',
      maxPayment: '5300$',
      vacanciesNumber: '2400'
    },
    {
      name: 'Системний адміністратор',
      nameEn: 'System administrator',
      requirements: [
        'Розуміти принципи роботи мережевого обладнання, мережевих протоколів',
        'Знати і вміти налаштовувати операційні системи',
        'Вміти працювати з доменними службами, поштовими службами',
        'Володіти широким колом знань різних систем і технологій'
      ],
      requirementsEn: [
        'Understand the principles of operation of network equipment, network protocols',
        'Know and be able to configure operating systems',
        'Be able to work with domain services, postal services',
        'Have a wide range of knowledge of different systems and technologies'
      ],
      link: 'https://www.work.ua/jobs-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B4%D0%BC%D1%96%D0%BD%D1%96%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80/',
      averagePayment: '700$',
      maxPayment: '4000$',
      vacanciesNumber: '620'
    },
    {
      name: 'Системний аналітик',
      nameEn: 'Systems analyst',
      requirements: [
        'Знання персонального комп\'ютера та пакетів Microsoft Office, SQL, XML та баз даних',
        'Організація управління проектами з розробки та впровадження',
        'Робота з Інтернет-технологіями та системами аналізу даних',
        'Знання сучасних мов програмування'
      ],
      requirementsEn: [
        'Knowledge of personal computer and Microsoft Office, SQL, XML and databases',
        'Organization of project management for development and implementation',
        'Working with Internet technologies and data analysis systems',
        'Knowledge of modern programming languages'
      ],
      link: 'https://www.work.ua/jobs-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%B8%D0%B9+%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D1%82%D0%B8%D0%BA/',
      averagePayment: '1000$',
      maxPayment: '5000$',
      vacanciesNumber: '45'
    },
    {
      name: 'Бізнес-аналітик',
      nameEn: 'Business analyst',
      requirements: [
        'Комунікативні навички',
        'Увага до деталей',
        'Уміння вирішувати проблеми',
        'Готовність ухвалювати рішення'
      ],
      requirementsEn: [
        'Communication skills',
        'Attention to detail',
        'Ability to solve problems',
        'Willingness to make decisions'
      ],
      link: 'https://www.work.ua/jobs-%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81-%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D1%82%D0%B8%D0%BA/',
      averagePayment: '1000$',
      maxPayment: '6000$',
      vacanciesNumber: '236'
    },
    {
      name: 'Графічний дизайнер',
      nameEn: 'Graphic designer',
      requirements: [
        'Володіння програмним забезпеченням для графічного дизайну',
        'Відчуття стилю, креативність, образне та об\'ємно-просторовемислення',
        'Знання основ дизайну: основи живопису і малюнка, колористики(використання кольору) і композиції та ін.',
        'Спеціальні знання в області графічного дизайну'
      ],
      requirementsEn: [
        'Possession of software for graphic design',
        'Sense of style, creativity, figurative and three-dimensional thinking',
        'Knowledge of the basics of design: the basics of painting and drawing, color (use of color) and composition, etc.',
        'Special knowledge in the field of graphic design'
      ],
      link: 'https://www.work.ua/jobs-graphic+designer/',
      averagePayment: '700$',
      maxPayment: '4000$',
      vacanciesNumber: '205'
    },
    {
      name: 'Розробник ігор',
      nameEn: 'Game developer',
      requirements: [
        'Робота з язиками програмування',
        'Знання технічної англйської мови',
        'Розробка концепції гри та ігрових механік, жанру, сюжету, характерів персонажів тощо',
        'Знання Python, Lua або інших скриптових мовах',
        'Аналіз статистики та балансування гри',
      ],
      requirementsEn: [
        'Working with programming languages',
        'Knowledge of technical English',
        'Development of the concept of the game and game mechanics, genre, plot, characters, etc.',
        'Knowledge of Python, Lua or other scripting languages',
        'Analysis of statistics and game balancing',
      ],
      link: 'https://www.work.ua/jobs-game+developer/',
      averagePayment: '800$',
      maxPayment: '5000$',
      vacanciesNumber: '32'
    },
  ],
  programmingLanguages: [
    {
      name: 'JavaScript',
      writeNowPerc: '18.8',
      change: '+0.17',
      writeNow: '1601',
      useSec: '3385',
      usePrim: '1089',
      index: '49.8',
    },
    {
      name: 'C#',
      writeNowPerc: '14.7',
      change: '-0.02',
      writeNow: '1252',
      useSec: '346985',
      usePrim: '455',
      index: '81.3',
    }
  ]
};

const SET_LANGUAGE = 'SET_LANGUAGE';

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        ...action.data
      };
    }
    default:
      return state;
  }
};

export const setLanguage = (language) => {
  return { type: SET_LANGUAGE, data: { language } };
};

// export const getUserData = () => async dispatch => {
  //const resp = 
  // if (resp.data.resultCode === 0) {
  //     const {id, login, email} = resp.data.data;
  //     dispatch(setUserData(id, email, login, true));
  // }
// };

export default generalReducer;